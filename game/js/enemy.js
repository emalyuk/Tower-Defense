var enemies = [];
var addedLife = 0;  //incremented in checkForDead()
let amount = arrCountMonster[LVL - 1];
var enemyTypes = [Enemy,FastEnemy,StrongEnemy];

var elem = document.getElementById("myBar");
var elemHP = document.getElementById('myProgress');
document.getElementById('leftEnemies').innerHTML = arrCountMonster[LVL-1];

let zombieImage = new Image();
zombieImage.src = './img/zombies/zombie.png';
let mumiaImage = new Image();
mumiaImage.src = './img/zombies/mumia.png';
let bossImage = new Image();
bossImage.src = './img/zombies/boss.png';

zombieImage.addEventListener('load', mainLoopRender);
mumiaImage.addEventListener('load', mainLoopRender);
bossImage.addEventListener('load', mainLoopRender);

function Enemy() {
    this.x = initials[lvl][0] + Math.random()*3 - Math.random()*3,
    this.y = initials[lvl][1] + Math.random()*10,
    this.index = 0,
    this.direction = directions[lvl][this.index], // 0: down; 1: left; 2: right; 3: up;
    this.life = this.maxLife;
    this.max = this.maxLife;
    this.width = 33;
    this.height = 33;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 20;
    this.numberOfFrames = 3;
    this.color = 'brown';
    this.OnTheMap = true;

    return this;
}


let initials = [[  60, 450],
                [  60,  35],
                [  60, 195],
                [ 105, 529],
                [  60, 100]
               ];

let directions = [[  2,   3,   2,   0,   2],
                  [  2,   0,   2,   3,   2],
                  [  2,   0,   2,   3,   2,   0,   1,   0],
                  [  3,   2,   0,   1,   3,   2,   0,   1,   0,   2],
                  [  2,   0,   1,   0,   2,   3,   2,   0,   2,   3,   2,   0,   2]
                 ];
let distanse =   [[177, 120, 760, 250, 960],
                  [400, 377, 736, 183, 960],
                  [185, 480, 355,  62, 845, 265, 617, 555],
                  [105, 802, 523, 257, 273, 668, 360, 587, 442, 960],
                  [830, 245,  75, 475, 255, 320, 422, 475, 605, 335, 824, 485, 960],
                 ];

//common to all Emeny objects
Enemy.prototype.value = 5;
Enemy.prototype.maxLife = 20;
Enemy.prototype.speed = baseSpeed;
Enemy.prototype.draw_width = 33;
Enemy.prototype.draw_height = 33;

Enemy.prototype.draw = function() {
    ctx.beginPath();
    if (this.life > 0) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - 1, this.y - this.height/2 + 4, this.width + 2, rectWidth/7 + 2);
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.x, this.y - this.height/2 + 5, this.width*this.life / this.max, rectWidth/7);
    }
    ctx.drawImage(
        this.image,
        this.frameIndex * this.width,
        this.direction * 32,
        this.width,
        this.height,
        this.x,
        this.y,
        this.draw_width,
        this.draw_height
    )
};

Enemy.prototype.update = function() {
  this.tickCount += 1;
  if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;

      if (this.frameIndex < this.numberOfFrames - 1)
          this.frameIndex += 1
      else
          this.frameIndex = 0;
  }
}

Enemy.prototype.move = function() {
    let move = this.speed;
    let i = this.index;

    if ((directions[lvl][i] == 0 || directions[lvl][i] == 3) && Math.abs(this.y - distanse[lvl][i]) <= this.speed ) {
        this.direction = directions[lvl][i + 1]
        this.index++;
    }

    if ((directions[lvl][i] == 1 || directions[lvl][i] == 2) && Math.abs(this.x - distanse[lvl][i]) <= this.speed ) {
        this.direction = directions[lvl][i + 1]
        this.index++;
    }

    if (this.direction == 0) {
        this.y += move;
    }

    if (this.direction == 1)
        this.x -= move;

    if (this.direction == 2)
        this.x += move;

    if (this.direction == 3)
        this.y -= move;

    if (((this.x >= 920 || (this.y >= 540)) || nextMap) && this.OnTheMap) {
        this.OnTheMap = false;
        checkFinishGame(this.x, this.y, this);
    }

    return false;
};

let nextMap = false;
function checkFinishGame(x, y, context){
    context.life = 0;
    OUR_DAMAGE += 10;
    if (OUR_DAMAGE >= 80) {
        elemHP.style.backgroundColor = '#b30000';
    }
    elem.style.width = OUR_DAMAGE + '%';

    if (OUR_DAMAGE >= 100) {
        let btnLose = document.getElementById('btnLose');
        let _btnStart = document.getElementById('btnStartID');
        $('#btnLose').show();
        btnLose.onclick = function() {
            $('#btnLose').hide();
            $('#btnStartID').show();
        }
        for (let i = 0; i < mapNum.length; i++) {
            mapNum[i] = false;
        }
        timeId = setTimeout(mainLoopLogic, 1000/FPS);
        initialData();
        LVL = 1;
        lvl = 0;
        OUR_DAMAGE = 0;
        elem.style.width = 0;
        document.getElementById('lvlID').innerHTML = LVL;
        amount = arrCountMonster[LVL - 1];
        document.getElementById('leftEnemies').innerHTML = amount;
        mapNum[0] = true;
        mapNumFunc[0]();
        gridFunc();
        hideUdgradePanel();
        _btnStart.onclick = function() {
            $('#btnStartID').hide();
            start();
        }
    }

    if (arrCountMonster[LVL-1] === stopped) {
        nextMap = true;
        checkWinGame();
    }
}

function checkWinGame() {
    let btnNext = document.getElementById('btnNext');
    $('#btnNext').show();
    document.getElementById('killedStat').innerHTML = 'Killed zombies: ' + (arrCountMonster[LVL - 1] - OUR_DAMAGE / 10);
    document.getElementById('passedStat').innerHTML = 'Missed zombies: ' + OUR_DAMAGE / 10;
    btnNext.onclick = function(){
        $('#btnNext').hide();
        document.getElementById('lvlID').innerHTML = ++LVL;
        for (let i = 0; i < mapNum.length; i++){         // change map
            if (mapNum[i]){
                if (i === mapNum.length - 1){ // i depends on mapNum.length and if game finished - surprise
                    let section = document.getElementById('section');
                    section.innerHTML = '';
                    section.style.background = "url('img/cup.png') no-repeat";
                    section.style.backgroundPosition = 'center';
                    break;
                }
                initialData();
                mapNumFunc[i+1]();
                mapNum[i] = false;
                mapNum[i+1] = true;
                lvl = i + 1;
                amount = arrCountMonster[LVL - 1]
                document.getElementById('leftEnemies').innerHTML = amount;
                document.getElementById('wavesCount').innerHTML = wavesCount;
                gridFunc();
                hideUdgradePanel();

                let _btnStart = document.getElementById('btnStartID');
                $('#btnStartID').show();
                _btnStart.onclick = function() {
                    $('#btnStartID').hide();
                    addEnemyTimer = 0;
                    start();
                }
                elem.style.width = 0;
                break;
            }
        }
    }
}

function checkForDead() {
    for (var i = 0, j = enemies.length; i < j; i++ ) {
        if (enemies[i].life <= 0) {
            money += enemies[i].value;
            document.getElementById('goldCounter').innerHTML = money;
            document.getElementById('leftEnemies').innerHTML = --amount;
            if (isUpTower){
                checkBtnUpgradeColor(TowerInfo.aboutTower);
            }
            enemies.splice(i,1);
            i--;
            j--;
            stopped++;
            let countMonster = wavesCount * 7 + lvl * 3;

            if (arrCountMonster[LVL-1] === stopped) {
                nextMap = true;
                checkWinGame();
            }
        }
    }
}

var addEnemy = function() {
    var enemy;
    var pick = Math.floor(Math.random()*enemyTypes.length);
    //select random enemy type
    if (pick === 0) enemy = new Enemy();
    if (pick === 1) enemy = new FastEnemy();
    if (pick === 2) enemy = new StrongEnemy();
    generated++;
    enemies.push(enemy);
    // document.getElementById('leftEnemies').innerHTML = ++amount;
}

Enemy.prototype.image = zombieImage;

//faster enemy
var FastEnemy = function(x, y) {
    Enemy.call(this, x, y);
};
FastEnemy.prototype = Object.create(Enemy.prototype);
FastEnemy.prototype.constructor = FastEnemy;

FastEnemy.prototype.image = mumiaImage;
FastEnemy.prototype.value = Enemy.prototype.value * 2;
FastEnemy.prototype.speed = Enemy.prototype.speed * 1.5;
FastEnemy.prototype.maxLife = Enemy.prototype.maxLife * 1.5;

//stronger enemy
var StrongEnemy = function(x,y) {
    Enemy.call(this, x, y);
};

StrongEnemy.prototype = Object.create(Enemy.prototype);
StrongEnemy.prototype.constructor = StrongEnemy;

StrongEnemy.prototype.image = bossImage;
StrongEnemy.prototype.value = Enemy.prototype.value * 3;
StrongEnemy.prototype.speed = Enemy.prototype.speed * 0.7;
StrongEnemy.prototype.maxLife = Enemy.prototype.maxLife * 4;
/*StrongEnemy.prototype.draw_width = Enemy.prototype.draw_width + 5;
StrongEnemy.prototype.draw_height = Enemy.prototype.draw_height + 5;*/

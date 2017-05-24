var SET_TOWER = false,
    kindTowers = [false, false, false, false],
    COUNT_KIND_TOWER = 4,
    COUNT_TOWERS = 0,
    towers = [],
    gridShow = null,
    rectWidth = 30,     //basic game unit size (pixles)
    maxWidth = canvas.width, //add maxHight if not perfect square
    FPS = 15,
    baseSpeed = 2, // speed enemies
    currentTower = 0, //tower type selector.

    //borders for attacker's path
    leftBorder = maxWidth/6,
    rightBorder = maxWidth*5/6,

    //vertical borders:
    firstBorder = maxWidth/4,
    secondBorder = maxWidth/2,
    thirdBorder = maxWidth*3/4,

    //points/statistics
    attackerPoints = 0,
    generated = 0,

    addEnemyTimer = 100,
    money = 400,
    OUR_DAMAGE = 0,
    isGridShow = false;

    var wavesCount = +document.getElementById('wavesCount').innerHTML,
    isNext = false,

    mapNum = [true, false, false, false, false],
    mapNumFunc = [map1, map2, map3, map4, map5],
    stopped = 0,

    lvl = 0,
    arrCountMonster = [14, 24, 34, 44, 54],
    costTowers = [50, 100, 150, 200],
    availableTowers = [true, true, true, true];
    isPause = false;

    houseCoord = [[903, 218], [903, 153], [585, 515], [903, 414], [903, 454]];
    RIPCoord = [[-17, 425], [-17, 6], [-17, 170], [77, 510], [-17, 75]];

    let timeId;
var ctx = canvas.getContext('2d');

var houseImage = new Image();
houseImage.src = './img/house.png'
var RIPImage = new Image();
RIPImage.src = './img/rip.png'

mainLoopRender = function() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = enemies.length - 1; i >= 0; i-- ) {
        enemies[i].draw();
        if (!isPause) {
            enemies[i].update();
        }
    }

    ctx.drawImage(RIPImage, 0, 0, 127, 120, RIPCoord[lvl][0], RIPCoord[lvl][1], 84, 80);
    ctx.drawImage(houseImage, 0, 0, 113, 95, houseCoord[lvl][0], houseCoord[lvl][1], 100, 80);

    for (var i = 0, j = towers.length; i < j; i++ ) {
        towers[i].draw();
    }
    for (var i = 0, j = bullets.length; i < j; i++) {
        bullets[i].draw();
    }

    document.getElementById('goldCounter').innerHTML = money;
    requestAnimationFrame(mainLoopRender);
};

RIPImage.addEventListener('load', mainLoopRender);
houseImage.addEventListener('load', mainLoopRender);

mainLoopLogic = function() {
    if (!isPause) {
        checkForDead();
        addEnemyTimer--;

        if (generated >= wavesCount * 7 + lvl * 3 && isNext == false) {
            addEnemyTimer = 200;
            if (wavesCount < 2 + lvl)
                isNext = true;
        }

        if (addEnemyTimer < 1 && wavesCount < lvl + 3) {
            if (isNext) {
                Enemy.prototype.maxLife += 10;
                FastEnemy.prototype.maxLife = Enemy.prototype.maxLife * 1.5;
                StrongEnemy.prototype.maxLife = Enemy.prototype.maxLife * 4;
                wavesCount += 1;
                document.getElementById('wavesCount').innerHTML = wavesCount;
                isNext = false;
            }
            addEnemy();
            addEnemyTimer = Math.random() * 30;
        }

        for (var i = 0, j = enemies.length; i < j; i ++ ) {
            if (enemies.length === 0) return;
            if (enemies[i].move()){
                attackerPoints++;
                enemies.splice(i,1);
                i--;
                j--;
            }
        }
        if (towers.length !== 0) {
            for (var i = 0, j = towers.length; i < j; i++ ) {
                towers[i].findTarget();
                towers[i].findUnitVector();
                towers[i].fire();
            }

            for (var i = 0, j = bullets.length; i < j; i++) {
                bullets[i].move();
                if (bullets[i].checkCollision()) {
                    bullets.splice(i,1);
                    j--;
                    i--;
                }
            }
        }
    }
    setTimeout(mainLoopLogic, 1000/FPS);
};

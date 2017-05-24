var LVL = 1;
document.getElementById('lvlID').innerHTML = LVL;

function start() {
    addEnemyTimer = 100;
    FPS = 15;
    clearTimeout(timeId);
    requestAnimationFrame(mainLoopRender);
}

function initialData(){
	gridArr.length = 0;
    towers.length = 0;
    enemies.length = 0;
    money = 400;
    OUR_DAMAGE = 0;
    isGridShow = false;
    generated = 0;
    SET_TOWER = false;
    kindTowers = [false, false, false, false];
    availableTowers = [true, true, true, true];
    COUNT_KIND_TOWER = 4;
    COUNT_TOWERS = 0;
    addEnemyTimer = 999900;
    wavesCount = 1;
    amount = 0;
    nextMap = false;
    stopped = 0;
    Enemy.prototype.maxLife = 20;
    FastEnemy.prototype.maxLife = Enemy.prototype.maxLife * 1.5;
    StrongEnemy.prototype.maxLife = Enemy.prototype.maxLife * 4;
    document.getElementById('wavesCount').innerHTML = wavesCount;
    document.getElementById('goldCounter').innerHTML = money;
    document.getElementById('leftEnemies').innerHTML = 0;
    elemHP.style.backgroundColor = 'green';
}

function Tower(x, y, image, damage){
    this.x = x,
    this.y = y,
    this.image = image;
    this.lvl = 1;
    this.kind = '';
    this.numCell = '';
};

Tower.prototype.damage = 5;
Tower.prototype.r = rectWidth;   //radius
Tower.prototype.rateOfFire = 15;   //smaller means more bullets per second
Tower.prototype.range = 100;
Tower.prototype.cost = 50;

Tower.prototype.findTarget = function() {
    //if no enemies, no target
    if(enemies.length === 0) {
        this.target = null;
        return;
    }
    //if target dead, remove target reference
    if(this.target && this.target.life <= 0) {
        this.target = null;
    }
    //find first enemy withing range and select that as tower's target
    for (var i = 0, j = enemies.length; i < j; i ++) {
        var dist = (enemies[i].x-this.x)*(enemies[i].x-this.x+rectWidth)+(enemies[i].y-this.y)*(enemies[i].y-this.y+rectWidth); //rectWidth included to look at center of rectangle, not top left corner
        if (dist < (this.range*this.range)) { //sqaure of range. avoice Math.sqrt which is expensive
            this.target = enemies[i];
            return; //only need a single target
        }
    }
};


Tower.prototype.findUnitVector = function() {
  if (!this.target) return false; //if there is no target, dont bother calculating unit vector
  var xDist = this.target.x-this.x;
  var yDist = this.target.y-this.y;
  var dist = Math.sqrt(xDist*xDist+yDist*yDist);
  this.xFire = this.x+this.r*xDist/dist; //where turret ends and bullets start
  this.yFire = this.y+this.r*yDist/dist;
};


Tower.prototype.fire = function() {
  this.rateOfFire--;
  if(this.target && this.rateOfFire <=0) {
    bullets.push(new Bullet(this.xFire + 35, this.yFire-25, this.target, this.damage));
    //reset this objects rateOfFire to the prototypes
    this.rateOfFire = this.constructor.prototype.rateOfFire;
  };
};

Tower.prototype.draw = function() {
    ctx.beginPath();
    ctx.drawImage(this.image, this.x, this.y - 50, 60, 90);
};


// Серый кирпичный тавер
var BrickTower = function(x, y, image){
    Tower.call(this, x, y, image);
}
BrickTower.prototype = Object.create(Tower.prototype);
BrickTower.prototype.constructor = BrickTower;

BrickTower.prototype.damage = 10;
BrickTower.prototype.rateOfFire = 20;
BrickTower.prototype.range = Tower.prototype.range * 1.2;
BrickTower.prototype.cost = 100;


// Улучшенный серый кирпичный тавер
var UpgradeBrickTower = function(x, y, image){
    Tower.call(this, x, y, image);
}
UpgradeBrickTower.prototype = Object.create(Tower.prototype);
UpgradeBrickTower.prototype.constructor = UpgradeBrickTower;

UpgradeBrickTower.prototype.damage = 13;
UpgradeBrickTower.prototype.rateOfFire = 15;
UpgradeBrickTower.prototype.cost = 150;
UpgradeBrickTower.prototype.range = Tower.prototype.range * 1.3;



// Mortar
var Mortar = function(x, y, image){
    Tower.call(this, x, y, image);
}
Mortar.prototype = Object.create(Tower.prototype);
Mortar.prototype.constructor = Mortar;

Mortar.prototype.damage = Tower.prototype.damage * 5;
Mortar.prototype.rateOfFire = 50;
Mortar.prototype.cost = 200;
Mortar.prototype.range = Tower.prototype.range * 2.2;

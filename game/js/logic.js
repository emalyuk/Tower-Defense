let Info = function (){			//constructor for cell
	this.value = 0;				// 0 = road, 1 = road with bum, 2 = free cell, 3 = cell with tower
	this.angle = [];
	this.index = 0;
	this.imageTower = '';
	this.kind = '';
	this.lvl = '';
	this.aboutTower = '';
	this.damage = '';
	this.attackSpeed = '';
	this.range = '';
}

let cell = 0;
let check = function(x,y){
	for (i = 0; i < gridArr.length; i++){
		if (x >= gridArr[i].angle[0] && x <= gridArr[i].angle[0] + 60 &&
			y >= gridArr[i].angle[1] && y <= gridArr[i].angle[1] + 45){
			cell = i;
			return gridArr[cell].angle;
		}
	}
}

let checkForUpgrade = function(x,y) {
	for (i = 0; i < gridArr.length; i++){
		if (x >= gridArr[i].angle[0] && x <= gridArr[i].angle[0] + 60 &&
	     	y >= gridArr[i].angle[1] && y <= gridArr[i].angle[1] + 45 && gridArr[i].value === 2){
			return gridArr[i];
		}
	}
}

let map5 = function(){
	let section = document.getElementById('section');
	section.style.background = "url('img/5.jpg')";
	section.style.backgroundSize = '100%';

	cellCount = 84
	gridArr = new Array(cellCount),          //create array for matrix and initial coordinates
		x = 1,
		y = 50;

		gridArr.fill(0);
		gridArr = gridArr.map(a => new Info); 	// fill array with objects and set coordinates

	let drawCell = function(){
		for (let i = 0; i < 16; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = x - 70;
		y = y + 45;
		for (let i = 16; i < 24; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 740;
		y = 175;
		for (let i = 24; i < 37; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x - 60;
		}
		x = 1;
		y = y + 45;
		for (let i = 37; i < 45; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		y = y - 45;
		x = x + 60;
		for (let i = 45; i < 60; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 295;
		y = y - 45;
		for (let i = 60; i < 63; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y - 45;
		}
		x = x + 60;
		y = y + 45;
		for (let i = 63; i < 66; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 120;
		y = 400;
		for (let i = 66; i < 69; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y - 45;
		}
		x = x + 60;
		y = y + 45;
		for (let i = 69; i < 72; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 470;
		y = 410;
		for (let i = 72; i < 75; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y - 45;
		}
		y = y + 45;
		x = x + 60;
		for (let i = 75; i < 78; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 660;
		y = 400;
		for (let i = 78; i < 81; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 80;
		y = 400;
		for (let i = 81; i < 84; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
	}
	drawCell();
}
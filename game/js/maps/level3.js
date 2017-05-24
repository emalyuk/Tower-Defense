let map3 = function (){
	let section = document.getElementById('section');
	section.style.background = "url('img/3.jpg') no-repeat";
	section.style.backgroundSize = '100% 100%'; 

	cellCount = 120;
	gridArr = new Array(cellCount),          //create array for matrix and initial coordinates
		x = 20,
		y = 90;

		gridArr.fill(0);
		gridArr = gridArr.map(a => new Info); 	// fill array with objects and set coordinates

	let drawCell = function(){
		for (let i = 0; i < 5; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 20;
		y = y + 45;
		for (let i = 5; i < 10; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 228;
		y = 190;
		for (let i = 10; i < 16; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 190;
		for (let i = 16; i < 22; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 1;
		y = 250;
		for (let i = 22; i < 25; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 1;
		y = y + 45;
		for (let i = 25; i < 28; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 60;
		y = y + 45;
		for (let i = 28; i < 33; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 340;
		for (let i = 33; i < 38; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 180;
		y = 535;
		for (let i = 38; i < 42; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 420;
		y = 120;
		for (let i = 42; i < 52; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 120;
		for (let i = 52; i < 62; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 120;
		for (let i = 62; i < 72; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 120;
		for (let i = 72; i < 76; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = x - 240;
		y = y + 45;
		for (let i = 76; i < 80; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = x - 240;
		y = y + 45;
		for (let i = 80; i < 84; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 260;
		y = 0;
		for (let i = 84; i < 95; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		gridArr[95].angle.push(260, 45);
		gridArr[95].index = 95;
		x = 900;
		y = 50;
		for (let i = 96; i < 104; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 660;
		y = 320;
		for (let i = 104; i < 108; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 660;
		y = y + 45;
		for (let i = 108; i < 112; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 660;
		y = y + 45;
		for (let i = 112; i < 116; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 410;
		for (let i = 116; i < 120; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}

	}
	drawCell();
}

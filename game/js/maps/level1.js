let cellCount,
	gridArr;
let map1 = function(){
	let section = document.getElementById('section');
	section.style.background = "url('img/1.jpg') no-repeat";
	section.style.backgroundSize = '100% 100%';

	cellCount = 93;
	gridArr = new Array(cellCount),          //create array for matrix and initial coordinates
	x = 35,
	y = 15;

	gridArr.fill(0);
	gridArr = gridArr.map(a => new Info); 	// fill array with objects and set coordinates

	let drawCell = function(){
		for (let i = 0; i < 14; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 35;
		y = y + 45;
		for (let i = 14; i < 28; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 35;
		y = y + 45;
		for (let i = 28; i < 35; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 105;
		for (let i = 35; i < 42; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 815;
		y = 105;
		for (let i = 42; i < 45; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 105;
		for (let i = 45; i < 48; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 5;
		y = 495;
		for (let i = 48; i < 53; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 5;
		y = y + 45;
		for (let i = 53; i < 58; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 217;
		y = 175;
		for (let i = 58; i < 67; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 217;
		y = 220;
		for (let i = 67; i < 76; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 220;
		y = 267;
		for (let i = 76; i < 81; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 280;
		y = 267;
		for (let i = 81; i < 86; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 720;
		y = 300;
		for (let i = 86; i < 90; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 780;
		y = 345;
		for (let i = 90; i < 93; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
	}
	drawCell();
}

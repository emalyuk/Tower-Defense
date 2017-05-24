let map2 = function (){
	let section = document.getElementById('section');
	section.style.background = "url('img/2.jpg') no-repeat";
	section.style.backgroundSize = '100% 100%'; 

	cellCount = 73;
	gridArr = new Array(cellCount),          //create array for matrix and initial coordinates
		x = 10,
		y = 90;

		gridArr.fill(0);
		gridArr = gridArr.map(a => new Info); 	// fill array with objects and set coordinates

	let drawCell = function(){
		for (let i = 0; i < 6; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 250;
		y = y + 45;
		for (let i = 6; i < 12; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 135;
		for (let i = 12; i < 18; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 330;
		y = 425;
		for (let i = 18; i < 26; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 330;
		y = y + 45;
		for (let i = 26; i < 34; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 780;
		y = 240;
		for (let i = 34; i < 38; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 240;
		for (let i = 38; i < 42; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 240;
		for (let i = 42; i < 44; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 10;
		y = 135;
		for (let i = 44; i < 48; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 450;
		y = 0;
		for (let i = 48; i < 56; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 520;
		y = 270;
		for (let i = 56; i < 59; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 70;
		}
		x = 520;
		y = 315;
		for (let i = 59; i < 62; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 70;
		}
		x = 660;
		y = 135;
		for (let i = 62; i < 65; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = x + 60;
		y = 120;
		for (let i = 65; i < 69; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 720;
		y = 75;
		for (let i = 69; i < 73; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
	}
	drawCell();
}
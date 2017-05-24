let map4 = function (){
	let section = document.getElementById('section');
	section.style.background = "url('img/7.jpg') no-repeat";
	section.style.backgroundSize = '100% 100%';

	cellCount = 96;
	gridArr = new Array(cellCount),          //create array for matrix and initial coordinates
		x = 20,
		y = 45;

		gridArr.fill(0);
		gridArr = gridArr.map(a => new Info); 	// fill array with objects and set coordinates

	let drawCell = function(){
		for (let i = 0; i < 12; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 80;
		y = 0;
		for (let i = 12; i < 26; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 80;
		y = y + 45;
		for (let i = 26; i < 40; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 170;
		y = 155;
		for (let i = 40; i < 50; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 170;
		y = y + 45;
		for (let i = 50; i < 58; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 725;
		y = 200;
		for (let i = 58; i < 63; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 230;
		y = 200;
		for (let i = 63; i < 71; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 320;
		y = 320;
		for (let i = 71; i < 75; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 320;
		y = y + 45;
		for (let i = 75; i < 79; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 320;
		y = y + 45;
		for (let i = 79; i < 83; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 320;
		y = y + 45;
		for (let i = 83; i < 87; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			x = x + 60;
		}
		x = 860;
		y = 90;
		for (let i = 87; i < 94; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
		x = 860;
		y = 490;
		for (let i = 94; i < 96; i++){
			gridArr[i].angle.push(x,y);
			gridArr[i].index = i;
			y = y + 45;
		}
	}
	drawCell();
}

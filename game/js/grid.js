let gridFunc = function(){
	let grid = document.getElementById('gridMap');
	grid.innerHTML = '';
	for (let i = 0; i < cellCount; i++) {
	    let cell = document.createElement('div');
	    cell.className = 'cell';
	    cell.id = 'cell' + i;
	    cell.style = `position: absolute; left: ${gridArr[i].angle[0]}px; top:${gridArr[i].angle[1]}px; z-index:1 `;
	    grid.appendChild(cell);
	}
}

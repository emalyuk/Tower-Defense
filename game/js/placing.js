gridShow = document.getElementById('gridMap');
gridShow.style.display = 'none';

//вычисляем индекс блока по которому был клик
function foo(id){
    if (id.indexOf('first') !== -1) return 0;
    if (id.indexOf('second') !== -1) return 1;
    if (id.indexOf('third') !== -1) return 2;
    if (id.indexOf('fourth') !== -1) return 3;
    return 3;
}

function setColorCell(){
    for (let i = 0; i < cellCount; i++) {
        let elem = document.getElementById('cell' + i);
        if (gridArr[i].value === 2) {
            elem.style.backgroundColor = 'rgba(218, 54, 54, 0.82)';
        }
        else {
            elem.style.backgroundColor = 'rgba(12, 150, 12, 0.24)';
        }
    }
}

let _classTower = ['Tower', 'Brick Tower', 'Cannon', 'Mortar'],
    _damage = ['5', '10', '13', '25'],
    _range = ['100', '120', '130', '220'],
    _cost = ['50', '100', '150', '200'],
    _speed = ['10', '12', '15', '5'];


function setInfoTower(i) {
    document.getElementById('classTower').innerHTML = 'Tower: ' + _classTower[i];
    document.getElementById('Damage').innerHTML = 'Damage:  ' + _damage[i];
    document.getElementById('Range').innerHTML = 'Range:  ' + _range[i];
    document.getElementById('Cost').innerHTML = 'Cost:   ' + _cost[i];
    document.getElementById('Speed').innerHTML = 'Attack speed: ' + _speed[i];
    if (!availableTowers[i]) {
        $('#noMoneyTextID').show();
    }
}
function defaultInfoTower() {
    document.getElementById('classTower').innerHTML = 'Tower: ';
    document.getElementById('Damage').innerHTML = 'Damage: ';
    document.getElementById('Range').innerHTML = 'Range: ';
    document.getElementById('Cost').innerHTML = 'Cost: ';
    document.getElementById('Speed').innerHTML = 'Attack speed: ';
    $('#noMoneyTextID').hide();
}


// подсветка иконок на панели таверов
var currentElem = null;
var iconTowerPanel = document.getElementsByClassName('towersIcon');
for (let i = 0; i < iconTowerPanel.length; i++){
    iconTowerPanel[i].onmouseover = function(event){
        if (currentElem) return;
        if (costTowers[i] > money) {
            iconTowerPanel[i].style.backgroundColor = 'rgba(99, 89, 89, 0.66)';
            availableTowers[i] = false;
        } else {
            iconTowerPanel[i].style.backgroundColor = 'rgba(202, 45, 34, 0.51)';
            availableTowers[i] = true;
        }
        var target = event.target;
        currentElem = target;
        setInfoTower(i);
    }
    iconTowerPanel[i].onmouseout = function(event){
        if (!currentElem) return;
        iconTowerPanel[i].style.backgroundColor = 'rgba(0, 150, 136, 0.317647)';
        currentElem = null;
        defaultInfoTower();
    }

}

// делегируем событие на всю панель
let panelTowers = document.getElementById('setTowersID');
let tower_icon = null;
let indexCostTower = null
panelTowers.onclick = function(event) {
    if (isPause) return;
    var target = event.target; // где был клик?
    target = target.parentNode;
    if (target.className !== 'towersIcon') return;  // не на блок с тавером? тогда не интересует
    tower_icon = document.getElementById(target.id);

    let index = foo(target.id);
    if (!availableTowers[index]) return;
    indexCostTower = index+1;

    if (!SET_TOWER){
        SET_TOWER = true;
        kindTowers[index] = true;
        $('#gridMap').show();   // показываем сетку
        setColorCell();
    } else {
        SET_TOWER = false;
        kindTowers[index] = false;
        gridShow.style.display = 'none';    // прячем сетку
    }
};


// клик по канвасу (полю игровому)
$('#canvas').click(function(e) {
    var offset = $(this).offset();
    var x = (e.pageX - offset.left);
    var y = (e.pageY - offset.top);
    upgradeTower(x, y);
    if (SET_TOWER) {   // если выбран тавер на панельке таверов
        let imgTower = null;
        // let demage = defaltDemage;
        let setIndexTower = 0;
        //перебираем и смотрим какая иконка тавера нажата чтобы ее вывести на канвас потом
        for (let i = 0; i < COUNT_KIND_TOWER; i++){
            if (kindTowers[i]) {
                imgTower = document.getElementById("notShowImage" + (i+1));
                setIndexTower = i;
                break;
            }
        }

        let angleTower = check(x,y);
        if (gridArr[cell].value === 0 && angleTower[0]){
            let elemTower = null;
            var value = document.getElementById('cost-tower' + indexCostTower);
            value = +value.textContent;
            if (value > money) return;
            money -= value;

            gridShow.style.display = 'none';

            ctx.drawImage(imgTower, angleTower[0], angleTower[1]);
            gridArr[cell].value = 2;
            // gridArr[cell].imageTower = imgTower;


            if (setIndexTower === 0) {
                elemTower = new Tower(angleTower[0], angleTower[1], imgTower);
            }
            if (setIndexTower === 1) {
                elemTower = new BrickTower(angleTower[0], angleTower[1], imgTower);
            }
            if (setIndexTower === 2) {
                elemTower = new UpgradeBrickTower(angleTower[0], angleTower[1], imgTower);
            }
            if (setIndexTower === 3) {
                elemTower = new Mortar(angleTower[0], angleTower[1], imgTower);

            }
            elemTower.kind = setIndexTower;
            elemTower.lvl = 1;
            elemTower.numCell = cell;
            elemTower.range = elemTower.__proto__.range;
            elemTower.attackSpeed = elemTower.__proto__.rateOfFire;
            elemTower.damage = elemTower.__proto__.damage;
            gridArr[cell].aboutTower = elemTower;

            towers.push(elemTower);

            /// sort array towers
            towers.sort(function(a, b) {
                return a.y - b.y;
            });

            SET_TOWER = false;
            kindTowers[setIndexTower] = false;
        }
    }
});


var checkboxGrid = document.getElementById('boxShowGrid');
checkboxGrid.onclick = function(){
    if (!isGridShow) {
        $('#gridMap').show();
        isGridShow = true;
        return;
    }
    $('#gridMap').hide();
    isGridShow = false;
    return;
}


let pause = document.getElementById('pauseID');
pause.onclick = function(){
    if (!isPause) {
        isPause = true;
        $('#btnPauseID').hide();
        $('#btnPlayID').show();
        $('#gameIsPausedTextID').show();
    } else {
        isPause = false;
        $('#btnPauseID').show();
        $('#btnPlayID').hide();
        $('#gameIsPausedTextID').hide();
    }
}

document.onkeyup = function(e){
    e = e || window.event;
    if (e.keyCode === 27){
        if (!isPause) {
            isPause = true;
            $('#btnPauseID').hide();
            $('#btnPlayID').show();
            $('#gameIsPausedTextID').show();
        } else {
            isPause = false;
            $('#btnPauseID').show();
            $('#btnPlayID').hide();
            $('#gameIsPausedTextID').hide();
        }
    }
}

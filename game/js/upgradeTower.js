let isUpTower = false;

let img11 = new Image();
let img12 = new Image();
let img13 = new Image();
img11.src = './img/tower11.png';
img12.src = './img/tower12.png';
img13.src = './img/tower13.png';

let img21 = new Image();
let img22 = new Image();
img21.src = './img/tower.png';
img22.src = './img/tower-upgrade.png';


let img31 = new Image();
let img32 = new Image();
let img33 = new Image();
let img34 = new Image();
let img35 = new Image();
img31.src = './img/Cannon1.png';
img32.src = './img/Cannon2.png';
img33.src = './img/Cannon3.png';
img34.src = './img/Cannon4.png';
img35.src = './img/Cannon5.png';


let img41 = new Image();
let img42 = new Image();
let img43 = new Image();
let img44 = new Image();
let img45 = new Image();
img41.src = './img/mortar1.png';
img42.src = './img/mortar2.png';
img43.src = './img/mortar3.png';
img44.src = './img/mortar4.png';
img45.src = './img/mortar5.png';


let arrImg = [[null, img11, img12, img13, null],
              [null, img21, img22, null],
              [null, img31, img32, img33, img34, img35, null],
              [null, img41, img42, img43, img44, img45, null]];

let arrAttackSpeed = [1, 2, 3, 3, 4, 2],
    arrCostUpgrades = [50, 70, 100, 150, 220],
    arrUpgradeDamage = [0, 5, 5, 6, 7, 10, 10],
    arrRangeUpgrade = [0, 5, 10, 10, 12, 15];

let panel = document.getElementById('ourTowerID'),
    panel2 = document.getElementById('upTowerID'),
    btnUpgrade = document.getElementById('costUpgrade');


function addContentUpgrade(tower) {
    let kind = tower.kind;
    let lvl = tower.lvl;
    let img = arrImg[kind][lvl];
    panel.appendChild(img);
    let lvlTower = document.createElement('h4');
    let dmgTower = document.createElement('h4');
    let rangeTower = document.createElement('h4');
    let towerAT = document.createElement('h4');
    lvlTower.innerHTML = `lvl:   ${tower.lvl}`;
    dmgTower.innerHTML = `damage: ${tower.damage}`;
    rangeTower.innerHTML = `range: ${Math.floor(tower.range)}`;
    towerAT.innerHTML = `Attack Speed: ${tower.attackSpeed}`;
    panel.appendChild(lvlTower);
    panel.appendChild(dmgTower);
    panel.appendChild(rangeTower);
    panel.appendChild(towerAT);
    btnUpgrade.innerHTML = arrCostUpgrades[lvl];

    if (arrImg[kind][lvl + 1] !== null) {
        let imgUP = arrImg[kind][lvl + 1];
        panel2.appendChild(imgUP);

        let lvlTower = document.createElement('h4');
        let dmgTower = document.createElement('h4');
        let rangeTower = document.createElement('h4');
        let towerAT = document.createElement('h4');
        let tempLVL = lvl;
        lvlTower.innerHTML = `lvl:  ${tempLVL+1}`;
        dmgTower.innerHTML = `damage: ${tower.damage} +${arrUpgradeDamage[lvl]}`;
        rangeTower.innerHTML = `range: ${Math.floor(tower.range)} +${arrRangeUpgrade[lvl]}`;
        towerAT.innerHTML = `Attack Speed: ${tower.attackSpeed} -${arrAttackSpeed[lvl]}`;
        panel2.appendChild(lvlTower);
        panel2.appendChild(dmgTower);
        panel2.appendChild(rangeTower);
        panel2.appendChild(towerAT);
    } else {
        let noUpdates = document.createElement('h3');
        noUpdates.innerHTML = 'MAX LVL!';
        noUpdates.style.color = '#a50808';
        noUpdates.style.fontFamily = 'sans-serif';
        panel2.appendChild(noUpdates);
        btnUpgrade.innerHTML = '--';
    }
}

let TowerInfo;
function upgradeTower(x, y) {
    TowerInfo = checkForUpgrade(x, y);
    if (TowerInfo) {
        if (!isUpTower) {
            checkBtnUpgradeColor(TowerInfo.aboutTower);
            showUpgradePanel(TowerInfo.aboutTower);
            $('.upgrade_tower').css('pointer-events', 'auto');
            canvas.onclick = function(){
                hideUdgradePanel();
                $('.upgrade_tower').css('pointer-events', 'none');
            }
        } else {
            hideUdgradePanel();
        }
    }
}


function showUpgradePanel(TowerInfo){
    $("div.slide_panel").animate({ left:'201px' }, 300);
    isUpTower = true;
    addContentUpgrade(TowerInfo);

    let btnUpgradeTower = document.getElementById('btnUpgradeID');
    btnUpgradeTower.onclick = function() {      // if press the upgrade btn
        let lvl = TowerInfo.lvl + 1;
        let kind = TowerInfo.kind;
        if (arrImg[kind][lvl] === null) return;
        if (arrCostUpgrades[TowerInfo.lvl] > money) return;
        document.getElementById('btnUpgradeID').style.backgroundColor = 'rgba(76, 175, 80, 0.97)';
        money -= arrCostUpgrades[TowerInfo.lvl];
        let img = arrImg[kind][lvl];
        TowerInfo.image = img;
        TowerInfo.range += arrRangeUpgrade[lvl-1];
        TowerInfo.damage += arrUpgradeDamage[lvl-1];
        TowerInfo.attackSpeed -= arrAttackSpeed[lvl-1];
        TowerInfo.lvl++;
        while(panel.firstChild) {
            panel.removeChild(panel.firstChild);
        }
        while(panel2.firstChild) {
            panel2.removeChild(panel2.firstChild);
        }

        addContentUpgrade(TowerInfo);
        checkBtnUpgradeColor(TowerInfo);
    }
}

function hideUdgradePanel(){
    $("div.slide_panel").animate({left:0},300);
    isUpTower = false;
    while(panel.firstChild) {
        panel.removeChild(panel.firstChild);
    }
    while(panel2.firstChild) {
        panel2.removeChild(panel2.firstChild);
    }
}

function checkBtnUpgradeColor(TowerInfo){
    if (arrCostUpgrades[TowerInfo.lvl] > money) {
        document.getElementById('btnUpgradeID').style.backgroundColor = 'gray';
        return;
    }
    document.getElementById('btnUpgradeID').style.backgroundColor = 'rgba(76, 175, 80, 0.97)';
}

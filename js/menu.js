/**
 * Created by Polina on 31.03.2017.
 */
/*var canvasDiv = document.getElementById('canvasDiv');
var canvasMenu = document.createElement("canvas");
var menuCtx = canvasMenu.getContext("2d");
canvasMenu.width = window.innerHeight;
canvasMenu.height = window.innerHeight;
document.body.appendChild(canvasMenu);
*/
window.onload = function(){
    let body = document.getElementsByTagName('body')[0];
    let h1 = document.getElementsByTagName('h1');
    let h2 = document.getElementsByTagName('h2');
    let menuView = document.getElementById('menuView');
    let startMenu = document.getElementById('startMenu');
    let gameView ; /////// page with canvas
    let howToPlayView = document.getElementById('howToPlayView');
    let infoLists = document.getElementsByClassName('infoList');
    let aboutUsView = document.getElementById('aboutUsView');

    const MENU_VIEW_ID = 0;
    const HOW_TO_PLAY_VIEW_ID = 1;
    const ABOUT_US_VIEW_ID = 2;
    const MAP_VIEW_ID = 3;

    let btnPlay = document.getElementById('btnPlay');
    let btnHowToPlay = document.getElementById('btnHowToPlay');
    let btnAboutUs = document.getElementById('btnAboutUs');
    let menuButtons = [btnPlay, btnHowToPlay, btnAboutUs];
    let buttonsBack = document.getElementsByClassName('backButton');

    let currentView = menuView;
    let currentViewId = MENU_VIEW_ID;

    resize();

    window.addEventListener('resize', resize);

    btnPlay.addEventListener('click', function () {
        location.href = "game/index.html";
        currentViewId = MAP_VIEW_ID;
    });

    btnHowToPlay.addEventListener('click', function () {
        currentViewId = HOW_TO_PLAY_VIEW_ID;
        makeViewActive(howToPlayView);
    });

    btnAboutUs.addEventListener('click', function () {
        currentViewId = ABOUT_US_VIEW_ID;
        makeViewActive(aboutUsView);
    });

    for (let i = 0; i < buttonsBack.length; i++) {
        buttonsBack[i].addEventListener('click', function () {
            currentViewId = MENU_VIEW_ID;
            makeViewActive(menuView);
        });
    }

    function makeViewActive(view) {
        currentView.classList.add('notActive');
        currentView = view;
        currentView.classList.remove('notActive');
        resize();
    }

    function resize() {
        currentView.style.height = window.innerHeight + 'px';
        h1[currentViewId].style.fontSize = window.innerWidth * 0.004 + 'em';
        checkPortraitOrientation();
    }

    function checkPortraitOrientation() {
        switch (currentViewId) {
            case MENU_VIEW_ID: {
                let children = startMenu.children;
                if (window.innerWidth / window.innerHeight < 0.8) {
                    startMenu.style.flexDirection = 'column';
                    children[0].style.height = children[2].style.height = window.innerHeight / 3.5 + 'px';
                    children[1].style.width = '95%';
                } else {
                    startMenu.style.flexDirection = 'row';
                    for (let i = 0; i < children.length; i++) {
                        children[i].style.width = '30%';
                        children[i].style.height = window.innerHeight * 0.8 + '%';
                    }
                    children[1].style.width = '70%';
                }
                for (let i = 0; i < menuButtons.length; i++)
                    menuButtons[i].style.fontSize = window.innerWidth * 0.003 + 'rem';
                break;
            }
            case HOW_TO_PLAY_VIEW_ID:
                infoLists[currentViewId - 1].style.width = window.innerWidth * 0.8 + 'px';
                h2[currentViewId - 1].style.fontSize = window.innerWidth * 0.002 + 'em';
                h2[currentViewId - 1].style.width = infoLists[currentViewId - 1].style.width - 35 + 'px';
                break;
            case ABOUT_US_VIEW_ID: {
                infoLists[currentViewId - 1].style.width = window.innerWidth * 0.8 + 'px';
                h2[currentViewId - 1].style.fontSize = window.innerWidth * 0.002 + 'em';
                h2[currentViewId - 1].style.width = infoLists[currentViewId - 1].style.width - 35 + 'px';
                /*let jdi = document.getElementById('JDI');
                jdi.style.height = '85%';
                let rules = document.getElementById('rules');
                rules.style.height = '85%';*/
                if (window.innerWidth / window.innerHeight < 0.8) {
                    jdi.style.flexDirection = 'column';
                } else {
                    jdi.style.flexDirection = 'row';
                }
                break;
            }
        }
    }
};
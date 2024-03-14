import './style.css';
import { buildPage } from './page-load';
import { menuContent } from './menu';
import { aboutContent } from './about';

buildPage();
console.log('Hello webpack!');

// clear #content div
const SwitchTabs = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
};

// get nav buttons
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const buttons = [homeBtn, menuBtn, aboutBtn];

// control css depending on which button is currently clicked
const clickedBtn = (currentBtn) => {
    buttons.forEach((btn) => {
        btn === currentBtn ? btn.classList.add('clicked') : btn.classList.remove('clicked');
    });
};

// button listeners
homeBtn.addEventListener('click', () => {
    SwitchTabs();
    buildPage();
    clickedBtn(homeBtn);
});
menuBtn.addEventListener('click', () => {
    SwitchTabs();
    menuContent();
    clickedBtn(menuBtn);
});
aboutBtn.addEventListener('click', () => {
    SwitchTabs();
    aboutContent();
    clickedBtn(aboutBtn);
});



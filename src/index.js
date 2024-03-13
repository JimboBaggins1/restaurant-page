import './style.css';
import { buildPage } from './page-load';

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

homeBtn.addEventListener('click', SwitchTabs);
menuBtn.addEventListener('click', SwitchTabs);
aboutBtn.addEventListener('click', SwitchTabs);



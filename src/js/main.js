// NAV JS PAGES - LHS
import { insertHome } from './home';
import { insertProjects } from './projects';
import { insertCourses } from './courses';
import { insertContact } from './contact';
import { autoStart } from './carousel';

// MEDIA - RHS
require('./canvas');
// import { init, animate } from './canvas';
import { nextSlide, prevSlide } from './carousel';

import utils from './utils';

// STYLE SHEETS and HTML
import "../stylesheets/style.css";
import html from '../../index.html';


// VARIABLES
const home     = document.getElementById('home');
const projects = document.getElementById('projects');
const courses  = document.getElementById('courses');
const contact  = document.getElementById('contact');
const cert     = document.getElementById('certificate');
const canvas   = document.querySelector('canvas');
const slider   = document.querySelector('.slider');
const navBar   = document.querySelector('.navbar-layout');
const leftSideWrapper = document.querySelector('.wrapper-left');

// EVENT LISTENERS
home.onclick = function(){
  insertHome();
  canvas.style.display = 'flex';
  slider.style.display = 'none';
  cert.style.display   = 'none';

  canvas.width = canvas.clientWidth;

  if(innerWidth <=768){
    canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.offsetHeight;
  } else {
    canvas.height = innerHeight - navBar.clientHeight;
  }
}

projects.addEventListener('click', event => {
  canvas.style.display = 'none';
  slider.style.display = 'flex';
  cert.style.display   = 'none';

  insertProjects();
  autoStart();
});

courses.addEventListener('click', event => {
  insertCourses();
  cert.style.display   = 'flex';
  canvas.style.display = 'none';
  slider.style.display = 'none';
});

contact.addEventListener('click', event => {
  insertContact();
  canvas.style.display = 'flex';
  slider.style.display = 'none';
  cert.style.display   = 'none';

  // canvas.width = leftSideWrapper.clientWidth;
  // if(innerWidth <= 768){
  //   canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.clientHeight;
  // } else {
  //   canvas.height = innerHeight - navBar.clientHeight;
  // }

});

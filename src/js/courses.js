export function insertCourses() {

  const leftSideWrapper = document.querySelector('.content');

  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", "\
    <h1>Courses</h1> \
    <h3><a href='https://www.lewagon.com/' target='_blank'>Le Wagon: Full Stack Developer</a></h3> ");

  leftSideWrapper.insertAdjacentHTML("beforeend", " \
    <div class='icons-coding'> \
      <img src='../images/vector-rails-12-transparent.png' height='50px'> \
      <img src='../images/Ruby_logo.svg' height='50px'> \
      <img src='../images/heroku-logotype-horizontal-purple.png' height='50px'> \
      <img src='../images/webpack-svg-2-transparent.png' height='50px'> \
      <img src='../images/svg-js-4-transparent.png' height='50px'> \
      <img src='../images/es6.png' height='50px'> \
      <img src='../images/CSS3_logo_and_wordmark.svg' height='50px'> \
      <img src='../images/HTML5_Logo.svg' height='50px'> \
      <img src='../images/PostgreSQL_logo.3colors.120x120.png' height='50px'> \
      <img src='../images/cloudinary_logo_for_white_bg.svg' height='50px'> \
      <img src='../images/babel.png' height='50px'> \
      <img src='../images/jsonapi.png' height='50px'> \
      <img src='../images/Octocat.png' height='50px'> \
      <img src='../images/Bootstrap_logo.svg' height='50px'> \
      <img src='../images/mapbox-logo-black.svg' height='40px'> \
    </div> \
      <ul class='bullets'> \
        <li> Core concepts of Object-Oriented programming </li> \
        <li> DOM Events & AJAX </li>\
        <li> Testing in Rails with Rspec </li>\
        <li> Authentication with Devise </li> \
        <li> Omniauth and 3rd services' login </li> \
        <li> Users' authorization with Pundit </li> \
        <li> Background Jobs with Sidekiq </li> \
      </ul>\
    </p> \
    <h3><a href='https://engineering.uottawa.ca/undergraduate-programs/courses/mechanical-2019' target='_blank'>University of Ottawa: B.A.Sc. Mechanical Engineering</a></h3> \
    <div class='icons-coding'> \
      <img src='../images/C++_Logo.svg' height='50px'> \
    </div> \
    <p> \
      <ul class='bullets'> \
        <li> Fortran </li>\
      </ul>\
    </p>");
}

export function insertHome() {

  const leftSideWrapper  = document.querySelector('.content');

  leftSideWrapper.innerHTML  = "";

  leftSideWrapper.insertAdjacentHTML("beforeend", "<h1>Veronica Wajda</h1><p>An Engineer turned programmer. <br><br>Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication, geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.<br><br>Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.</p>");

}



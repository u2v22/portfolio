const projects = document.getElementById('projects');
const home = document.getElementById('home');
const contact = document.getElementById('contact');
const courses = document.getElementById('courses');
const wrapper = document.querySelector('.content-wrapper');


home.addEventListener('click', event => {
  console.log('clicked');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", "<div class='content'><h1>Veronica Wajda</h1><p>An Engineer turned programmer. <br><br>Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication, geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.<br><br>Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.</p></div><canvas> </canvas>")
});

projects.addEventListener('click', event => {
  console.log('projects');

  wrapper.innerHTML = "";

  wrapper.insertAdjacentHTML("beforeend", "<div class='content'> \
    <h3>Cnd-Rockies-Ice-Climbs</h3> \
    <p>Ever wanted to find ice conditions on a specific climb? Or filter out ice climbs that are formed? What about having a community where anyone can update a trip description as routes change (anchors, approaches)? Canadian Rockies Ice Climbs is a website dedicated to those adventurous individuals that want to keep track of, and share beta about ice climbs specific to the Canadian rocky mountains.</p> \
    <h3>Uproot</h3> \
    <p>As we were all preparing to leave Barcelona everyone wondered where they would end up. France, Monaco, USA? It's a problem most of us were faced with: do we go back home or make somewhere new our home? Uproot is a mobile first web application designed to help you decide just that. Unlike typical information first websites Uproot uses a fun interactive quiz to help you decide where to relocate. You can manage your results if you do multiple quizzes. If you're not convinced then you can use the city lookup function to compare stats about the cities where you might consider living. </p> \
    <h3> Airpet </h3> \
    <p>A fun little Airbnb inspired replicate. Shelters can list available pets so people can have furry companions on a short term basis. Great for listing your pets while you're on vacation too!</p> \
    </div>");
    wrapper.insertAdjacentHTML("beforeend", "<img src='../images/cnd-ice-main-iPhone.png' alt='Screenshot of project website'>");
});

contact.addEventListener('click', event => {
  console.log('contact');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", "<h3>Hello</h3>")
  wrapper.insertAdjacentHTML("beforeend", "<p>EShoot me an email at veronica.wajda@gmail.com if you have any interesting projects or would like to discuss any work opportunities.</p>")
});

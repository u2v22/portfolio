const projects = document.getElementById('projects');
const home = document.getElementById('home');
const contact = document.getElementById('contact');
const courses = document.getElementById('courses');
const wrapper = document.querySelector('.content');
const certificate = document.getElementById('certificate');
const projectImages = document.querySelector('.project-images');
import { addFooter } from './footer';

home.addEventListener('click', event => {
  certificate.classList.remove('show-flex-element');
  certificate.classList.add('hide-flex-element');
  document.querySelector('.slider').classList.add('hide-flex-element');
  document.querySelector('.slider').classList.remove('show-flex-element');
  document.querySelector('canvas').classList.add('show-flex-element');
  document.querySelector('canvas').classList.remove('hide-flex-element');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", "<h1>Veronica Wajda</h1><p>An Engineer turned programmer. <br><br>Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication, geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.<br><br>Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.</p>");
});

projects.addEventListener('click', event => {
  certificate.classList.remove('show-flex-element');
  certificate.classList.add('hide-flex-element');
  document.querySelector('.slider').classList.remove('hide-flex-element');
  document.querySelector('.slider').classList.add('show-flex-element');
  document.querySelector('canvas').classList.add('hide-flex-element');
  document.querySelector('canvas').classList.remove('show-flex-element');
  wrapper.innerHTML = "";

  wrapper.insertAdjacentHTML("beforeend", " \
    <h3>Cnd-Rockies-Ice-Climbs</h3> \
    <p>Ever wanted to find ice conditions on a specific climb? Or filter out ice climbs that are formed? What about having a community where anyone can update a trip description as routes change (anchors, approaches)? Canadian Rockies Ice Climbs is a website dedicated to those adventurous individuals that want to keep track of, and share beta about ice climbs specific to the Canadian rocky mountains.</p> \
    <h3>Uproot</h3> \
    <p>As we were all preparing to leave Barcelona everyone wondered where they would end up. France, Monaco, USA? It's a problem most of us were faced with: do we go back home or make somewhere new our home? Uproot is a mobile first web application designed to help you decide just that. Unlike typical information first websites Uproot uses a fun interactive quiz to help you decide where to relocate. You can manage your results if you do multiple quizzes. If you're not convinced then you can use the city lookup function to compare stats about the cities where you might consider living. </p> \
    <h3> Airpet </h3> \
    <p>A fun little Airbnb inspired replicate. Shelters can list available pets so people can have furry companions on a short term basis. Great for listing your pets while you're on vacation too!</p> \
    ");
  addFooter();
});

courses.addEventListener('click', event => {
  certificate.classList.remove('hide-flex-element');
  certificate.classList.add('show-flex-element');
  document.querySelector('.slider').classList.add('hide-flex-element');
  document.querySelector('.slider').classList.remove('show-flex-element');
  document.querySelector('canvas').classList.add('hide-flex-element');
  document.querySelector('canvas').classList.remove('show-flex-element');

  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", " \
    <h1>Courses</h1> \
    <h3>React and Redux - current WIP</h3> \
    <p>App: Constructor, Render, Props, States | Action creator as callback | React and Redux logger Redux promises | Routing and form Testing with Jest</p> \
    <h3>Full Stack Dev</h3> \
    <p> \
    Web 101: how the web works | Terminal basic commands | Git basic commands | HTML / CSS foundations | Javascript foundations | General knowledge about tech workflows in a startup | Core concepts of programming | Ruby doc for built-in classes | Algorithms & data structures (Array, Hash) | Text pattern detection with Regular Expressions | Parse and store data from standardized files (JSON, CSV, XML) | Web scraping with Nokogiri | Request and parse data from RESTful JSON APIs | Core concepts of Object-Oriented programming | Classes, objects and instance variables | Instance and class methods, Inheritance | Public vs. Private Interfaces | Routing users' requests | Simulating a database with CSV files | In-depth understanding of MVC (Model View Controller) | Database Schema Design & SQL | One-to-many, many-to-many relations and join table | CRUD in SQL (Create, Read, Update, Delete) | Advanced JOIN queries | Connecting your DB to ruby with an ORM (Object Relational Mapping) | Active Record Basics: migrations & naming convention | Active Record Advanced: associations & validation | Product Design, UX & UI principles | HTML basics | CSS (selectors, properties, stylesheets' organization) | Atomic design principles | CSS techniques with flexbox & CSS grid | CSS media queries for Adaptive Design | Bootstrap basics & Responsive Grid System | JavaScript fundamentals | ES6 and differences to ES5 | JavaScript Tooling (Babel, Webpack, yarn) | DOM Events & AJAX | MVC in Rails: Routing, Controllers, Params & Views | Models & CRUD in Rails | Adding gems to your project | ERB: Layouts, Partials and Helpers | Nested Resources and Namespaces | Refactoring an app with Services | Defining a Rails API | Collaborating on a Rails app with Git and Github | Testing in Rails with Rspec | Authentication with Devise | Omniauth and 3rd services' login | Users' authorization | Search in Rails | Payment, Mailing, Geocoding and Maps | Background Jobs with Sidekiq | Image upload with Cloudinary & Continuous Deployment with Heroku \
    </p> \
    <h3>B.A.Sc. Mechanical Engineering</h3> \
    <p> \
    Engineering Design | Principles of Chemistry | Engineering Mechanics | Fundamentals of Engineering Computation | Calculus I | Technical Report Writing | Calculus II | Introduction to Linear Algebra | Introduction to Mechanical Engineering | Fundamentals of Physics II | Introduction to Product Development for Engineers and Computer Scientists | Calculus III for Engineers | Ordinary Differential Equations and Numerical Methods | Mechanics II | Thermodynamics I | Engineering Materials I | Mechanics of Materials | Electric Circuits and Machines for Mechanical Engineering | Probability and Statistics for Engineers | Introduction to Design | Thermodynamics II | Engineering Materials II | Electronics for Mechanical Engineers | Mathematics for Engineers | Advanced Strength of Materials | System Dynamics | Fluid Mechanics I | Engineering Law | Heat Transfer | Dynamics of Machinery | Machine Design | Control Systems | Fluid Mechanics II | Computer-Aided Design | Manufacturing | Technology, Society and Environment since 1800 | Mechanical Vibration Analysis | Mechanical Engineering Laboratory \
    </p>");
  addFooter();
});

contact.addEventListener('click', event => {
  certificate.classList.remove('show-flex-element');
  certificate.classList.add('hide-flex-element');
  document.querySelector('.slider').classList.add('hide-flex-element');
  document.querySelector('.slider').classList.remove('show-flex-element');
  document.querySelector('canvas').classList.add('show-flex-element');
  document.querySelector('canvas').classList.remove('hide-flex-element');

  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", " \
    <h1>Hello</h1> \
    <p>Shoot me an email at <a id='highlight' href='mailto:veronica.wajda@gmail.com'>veronica.wajda@gmail.com</a> if you have any interesting projects or would like to discuss any work opportunities.</p> \
    <img src='https://simplemaps.com/static/svg/ca/ca.svg'> \
    <p> \
    Located in Calgary, Ab, Canada. <br><br> \
    Find my work on: \
    <a id='highlight' href='https://github.com/u2v22' target='_blank'><i class='fab fa-github'></i> Github</a>. <br><br>\
    Discover out what I'm all about on my: \
    <a id='highlight' href='https://www.instagram.com/veronica_hw/' target='_blank'><i class='fab fa-instagram'></i> Instagram</a><br> \
    ...or check out this and more of my experience on \
    <a id='highlight' href='https://www.linkedin.com/in/veronicahwajda/' target='_blank'><i class='fab fa-linkedin'></i> LinkedIn</a>.</p> \
    ");
});

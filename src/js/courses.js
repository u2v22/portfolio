export function insertCourses() {

  const leftSideWrapper = document.querySelector('.content');

  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", "\
    <h1>Courses</h1> \
    <h3>React and Redux - current WIP </h3> \
    <p>App: Constructor, Render, Props, States | Action creator as callback | React and Redux logger Redux promises | Routing and form Testing with Jest \
    </p> \
    <h3>Full Stack Dev</h3> \
    <p> \
    Web 101: how the web works | Terminal basic commands | Git basic commands | HTML / CSS foundations | Javascript foundations | Core concepts of programming | Ruby doc for built-in classes | Algorithms & data structures (Array, Hash) | Text pattern detection with Regular Expressions | Parse and store data from standardized files (JSON, CSV, XML) | Web scraping with Nokogiri | Request and parse data from RESTful JSON APIs | Core concepts of Object-Oriented programming | Classes, objects and instance variables | Instance and class methods, Inheritance | Public vs. Private Interfaces | Routing users' requests | Simulating a database with CSV files | In-depth understanding of MVC (Model View Controller) | Database Schema Design & SQL | One-to-many, many-to-many relations and join table | CRUD in SQL (Create, Read, Update, Delete) | Advanced JOIN queries | Connecting your DB to ruby with an ORM (Object Relational Mapping) | Active Record Basics: migrations & naming convention | Active Record Advanced: associations & validation | Product Design, UX & UI principles | HTML basics | CSS (selectors, properties, stylesheets' organization) | Atomic design principles | CSS techniques with flexbox & CSS grid | Bootstrap basics & Responsive Grid System | JavaScript fundamentals | ES6 and differences to ES5 | JavaScript Tooling (Babel, Webpack, yarn) | DOM Events & AJAX | MVC in Rails: Routing, Controllers, Params & Views | Models & CRUD in Rails | Adding gems to your project | ERB: Layouts, Partials and Helpers | Nested Resources and Namespaces | Refactoring an app with Services | Defining a Rails API | Collaborating on a Rails app with Git and Github | Testing in Rails with Rspec | Authentication with Devise | Omniauth and 3rd services' login | Users' authorization | Search in Rails | Payment, Mailing, Geocoding and Maps | Background Jobs with Sidekiq | Image upload with Cloudinary & Continuous Deployment with Heroku \
    </p> \
    <h3>B.A.Sc. Mechanical Engineering</h3> \
    <p> \
    Engineering Design | Principles of Chemistry | Engineering Mechanics | Fundamentals of Engineering Computation | Calculus I | Technical Report Writing | Calculus II | Introduction to Linear Algebra | Introduction to Mechanical Engineering | Fundamentals of Physics II | Introduction to Product Development for Engineers and Computer Scientists | Calculus III for Engineers | Ordinary Differential Equations and Numerical Methods | Mechanics II | Thermodynamics I | Engineering Materials I | Mechanics of Materials | Electric Circuits and Machines for Mechanical Engineering | Probability and Statistics for Engineers | Introduction to Design | Thermodynamics II | Engineering Materials II | Electronics for Mechanical Engineers | Mathematics for Engineers | Advanced Strength of Materials | System Dynamics | Fluid Mechanics I | Engineering Law | Heat Transfer | Dynamics of Machinery | Machine Design | Control Systems | Fluid Mechanics II | Computer-Aided Design | Manufacturing | Technology, Society and Environment since 1800 | Mechanical Vibration Analysis | Mechanical Engineering Laboratory \
    </p>");
}

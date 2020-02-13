const footer = document.querySelector('footer');
const rightSide = document.querySelector('.content-right');
const courses = document.getElementById('courses');
const projects = document.getElementById('projects');

const addFooter = () => {
  if(courses || projects){
    rightSide.insertAdjacentHTML("beforeend", " \
    <footer><div><a href='https://www.instagram.com/veronica_hw/' target='_blank'><i class='fab fa-instagram'></i></a><a href='https://www.linkedin.com/in/veronicahwajda/' target='_blank'><i class='fab fa-linkedin-in'></i></a><a href='https://github.com/u2v22' target='_blank'><i class='fab fa-github'></i></a></div></footer>");
  };
}


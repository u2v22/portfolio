export function insertContact() {

  const leftSideWrapper = document.querySelector('.content');

  leftSideWrapper.innerHTML = "";

  leftSideWrapper.insertAdjacentHTML("beforeend", " \
    <h1>Hello</h1> \
    <p>Shoot me an email at <a id='highlight' href='mailto:veronica.wajda@gmail.com'>veronica.wajda@gmail.com</a> if you have any interesting projects or would like to discuss any work opportunities.</p> \
    <img src='https://simplemaps.com/static/svg/ca/ca.svg' style='width:200px; display: block; display: relative; margin:0 auto; '> \
    <p> \
    Located in Calgary, Ab, Canada. <br><br> \
    Find my work on: \
    <a id='highlight' href='https://github.com/u2v22' target='_blank'><i class='fab fa-github'></i> Github</a>. <br><br>\
    Discover out what I'm all about on my: \
    <a id='highlight' href='https://www.instagram.com/veronica_hw/' target='_blank'><i class='fab fa-instagram'></i> Instagram</a><br> \
    ...or check out this and more of my experience on \
    <a id='highlight' href='https://www.linkedin.com/in/veronicahwajda/' target='_blank'><i class='fab fa-linkedin'></i> LinkedIn</a>.</p> \
    ");
}

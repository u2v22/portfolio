import { highlight } from './colours';

export function insertProjects() {

  const leftSideWrapper = document.querySelector('.content');

  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", " \
    <h3><a href='http://cnd-rockies-ice-climbs.herokuapp.com' target='_blank'>Cnd-Rockies-Ice-Climbs</a></h3> \
    <p>Ever wanted to find ice conditions on a specific climb? Or filter out ice climbs that are formed? What about having a community where anyone can update a trip description as routes change (anchors, approaches)? Canadian Rockies Ice Climbs is a website dedicated to those adventurous individuals that want to keep track of, and share beta about ice climbs specific to the Canadian rocky mountains.</p> \
    <h3><a href='http://www.uproot.live' target='_blank'>Uproot</a></h3> \
    <p>As we were all preparing to leave Barcelona everyone wondered where they would end up. France, Monaco, USA? It's a problem most of us were faced with: do we go back home or make somewhere new our home? Uproot is a mobile first web application designed to help you decide just that. Unlike typical information first websites Uproot uses a fun interactive quiz to help you decide where to relocate. You can manage your results if you do multiple quizzes. If you're not convinced then you can use the city lookup function to compare stats about the cities where you might consider living. </p> \
    <h3><a href='http://airpet-u2v22@herokuapp.com' target='_blank'> Airpet </a></h3> \
    <p>A fun little Airbnb inspired replicate. Shelters can list available pets so people can have furry companions on a short term basis. Great for listing your pets while you're on vacation too!</p> \
    ");
  highlight()
}

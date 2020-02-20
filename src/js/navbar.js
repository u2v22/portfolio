const navItems = document.querySelectorAll('.navbar-layout li');
console.log(navItems);

const hoverColors = [
  'rgb(235, 82, 71)',
  'rgb(114, 201, 194)',
  'rgb(134, 167, 158)',
  'rgb(183, 85, 74)']

navItems.forEach(function(item){
  item.addEventListener('mouseover', () => {
    item.style.color = hoverColors[Math.floor(Math.random() * hoverColors.length)];
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = '#000000';
  })
})

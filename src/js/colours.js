export function highlight() {
  const links = document.querySelectorAll('a');
  console.log(links);

  const hoverColors = [
    'rgb(235, 82, 71)',
    'rgb(114, 201, 194)',
    'rgb(134, 167, 158)',
    'rgb(183, 85, 74)']

  links.forEach(function(item){
    item.addEventListener('mouseover', () => {
      item.style.color = hoverColors[Math.floor(Math.random() * hoverColors.length)];
    });
    item.addEventListener('mouseleave', () => {
      item.style.color = '#000000';
    });
  });
}


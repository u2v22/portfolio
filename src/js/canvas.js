import utils from './utils';

const navBar = document.querySelector('.navbar-layout');
const leftSide = document.querySelector('.content-left');

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
console.log(leftSide.clientHeight);

if(innerWidth <=768){
  canvas.height = innerHeight - navBar.clientHeight - leftSide.clientHeight;
} else {
  canvas.height = innerHeight - navBar.clientHeight;
}

const gravity = 1;
const friction = 0.6;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = [
  'rgb(235, 82, 71)',
  'rgb(114, 201, 194)',
  'rgb(134, 167, 158)',
  'rgb(183, 85, 74)']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  if(canvas){
    console.log('has canvas');
    canvas.width = canvas.clientWidth;
    if(innerWidth <=768){
      canvas.height = innerHeight - navBar.clientHeight - leftSide.clientHeight;
    } else {
      canvas.height = innerHeight - navBar.clientHeight;
    }
    init();
  }
})

// Utility functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x * friction;
        particle.velocity.y = vFinal1.y * friction;

        otherParticle.velocity.x = vFinal2.x * friction;
        otherParticle.velocity.y = vFinal2.y * friction;
    }
}

// Objects
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    // this.dy = dy
    this.velocity = {
      x: Math.random() - 0.5 * 3,
      y: Math.random() - 0.5 * 3
    }
    this.radius = radius
    this.color = color
    this.mass = 1 //Math.random()

    this.update = particles => {
      this.draw();

      for(let i = 0; i < particles.length; i++) {
        if(this === particles[i]) continue;
        if(distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius - particles[i].radius < 0) {
          resolveCollision(this, particles[i]);
        }
      }
      // Ensuring the balls don't excape from the sides
      if((this.x - this.radius <= 0) || (this.x + this.radius >= canvas.width)) {
        this.velocity.x = -this.velocity.x;
      }
      if(this.y - this.radius <= 0) {
        this.velocity.y = -(this.velocity.y - 5); //-this.dy;
      } else if(this.y + this.radius >= canvas.height) {
        this.velocity.y = -this.velocity.y * friction; //-this.dy;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;

    };

  this.draw = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.font = "20px Georgia";
    c.fillStyle = this.color // was strokeStyle
    // c.fillStyle = pattern(<img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png">, 0);
    c.fill() // was c.stroke()
    // <img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png">
    c.closePath()
  };
}

// Implementation
let particles
function init() {
  particles = []

  for (let i = 0; i < 12; i++) {
    let radius;
    if(innerWidth <= 578){
      radius = randomIntFromRange(15, 40);
    } else if (innerWidth <= 768 && innerWidth > 578) {
      radius = randomIntFromRange(20, 50);
    } else {
      radius = randomIntFromRange(20,60);
    }
    const color = randomColor(colors);
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);

    if(i !== 0){
      for(let j = 0; j < particles.length; j++){
        if(distance(x, y, particles[j].x, particles[j].y) - radius - particles[j].radius < 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = - 1;
        }
      }
    }

    particles.push(new Particle(x, y, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach(particle => {
   particle.update(particles)
  })
}

init()
animate()

document.getElementById('home').onClick = () => {
  init()
  animate()
}

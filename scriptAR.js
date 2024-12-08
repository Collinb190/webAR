// Grab the cube element
const cube = document.getElementById('rotatingCube');
let rotationSpeed = 0.3; // Speed of rotation (degrees per frame)

// Animation loop
function animateRotation() {
  // Get the current rotation of the cube
  let rotation = cube.getAttribute('rotation');

  // Increment the Y rotation by rotationSpeed (this will make it rotate continuously)
  rotation.y += rotationSpeed;

  // Update the cube's rotation
  cube.setAttribute('rotation', rotation);

  // Call the animation loop again on the next frame
  requestAnimationFrame(animateRotation);
}

// Start the animation loop
animateRotation();

// Array of colors to cycle through for the cube
const cubeColors = ['#2f6ba3', '#d94c46', '#c0c94d', '#4cbf99'];
let currentCubeColorIndex = 0;

// Function to cycle cube color and apply smooth animation
function cycleCubeColor() {
  const cube = document.querySelector('#rotatingCube');

  // Apply color change with a smooth transition effect
  cube.style.transition = 'background-color 0.9s ease, transform 0.9s ease';
  cube.setAttribute('color', cubeColors[currentCubeColorIndex]); // Change color of the cube

  // Increment the index to get the next color
  currentCubeColorIndex = (currentCubeColorIndex + 1) % cubeColors.length;
}

// Start cycling cube colors every 3 seconds
setInterval(cycleCubeColor, 3000);

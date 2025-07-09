import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0'); // Corrected color code

// Add a camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5; // Move the camera back so we can see the cube

// Create and add cube object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 }); // better for lighting
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lighting to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Setup the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

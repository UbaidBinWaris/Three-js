import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.getElementById('canvas');

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// Add a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create and add geometries
const geometry = new THREE.DodecahedronGeometry(1, 0);
const material = new THREE.MeshLambertMaterial({ color: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshLambertMaterial({ color: "#B4B4B3" });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.x = 2;

scene.add(dodecahedron);
scene.add(box);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animate
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;



  controls.update(); // Required
  renderer.render(scene, camera);
}

animate();

import React,{ useState, useEffect, useRef}  from 'react'; 
import { 
  BoxGeometry, 
  DirectionalLight, 
  Mesh, 
  MeshNormalMaterial, 
  MeshPhongMaterial, 
  PerspectiveCamera, 
  Scene, 
  WebGLRenderer } 
from "three";


const { innerWidth, innerHeight } = window;

const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);

const geometry = new BoxGeometry();
const material = new MeshNormalMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}



const RenderStructure: React.FC = ():JSX.Element =>{

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { current } = divRef;
    if (current) {
      current.innerHTML = "";
      current.append(renderer.domElement);
      animate();
    }
    
  }, []);
  return <div ref={divRef}></div>;

}

export default RenderStructure;
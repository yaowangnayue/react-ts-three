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
// const material = new MeshNormalMaterial(); // 这个材质不支持光源
const material = new MeshPhongMaterial({ color: 0x44aa88 }); // 这个材质是支持光源的
const cube = new Mesh(geometry, material);
scene.add(cube);

// 先定义平行光的颜色
const color = 0xffffff; 
// 定义光照强度
const intensity = 1;
// 实例话平行光
const light = new DirectionalLight(color, intensity);
// 设置下光源的位置
light.position.set(-1,2,4);
// 添加平行光源
scene.add(light);

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
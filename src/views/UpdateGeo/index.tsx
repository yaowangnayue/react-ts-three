/**
 * 设置自适应设备分辨率
 */
import React,{ 
  // useState, 
  useEffect, 
  useRef
}  from 'react'; 
import { 
  BoxGeometry, 
  DirectionalLight, 
  Mesh, 
  // MeshNormalMaterial, 
  MeshPhongMaterial, 
  PerspectiveCamera, 
  Scene, 
  WebGLRenderer } 
from "three";
import './index.css'


const { innerWidth, innerHeight } = window;

const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new WebGLRenderer();
// renderer.setSize(innerWidth, innerHeight);

const geometry = new BoxGeometry();
// const material = new MeshNormalMaterial(); // 这个材质不支持光源
const material = new MeshPhongMaterial({ color: 0x44aa88 }); // 这个材质是支持光源的
// const cube = new Mesh(geometry, material);
// scene.add(cube);

// 添加多个立方体
const cubes = [-2,0, 2].map(num=> makeInstance(num));
function makeInstance (x: number){
  const cube = new Mesh(geometry, material);
  cube.position.x = x;
  return cube;
}
// 添加到场景里
scene.add(...cubes )


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


  if (resizeRendererToDisplaySize(renderer)) {
    const { clientWidth, clientHeight } = renderer.domElement;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
  }
   
  cubes.forEach(cube => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  })
  renderer.render(scene, camera);
}



// 建立一个让canvas 像素尺寸随css 尺寸同步更新的方法

// 将渲染尺寸设置为其显示的尺寸，返回画布像素尺寸是否等于其显示(css)尺寸的布尔值
function resizeRendererToDisplaySize(renderer: WebGLRenderer): Boolean {
  const { width, height, clientWidth, clientHeight } = renderer.domElement;
  // const needResize = width !== clientWidth || height !== clientHeight;
  // if (needResize) { 
  //   renderer.setSize(clientWidth, clientHeight, false);
  // }

  const [w, h] = [clientWidth * devicePixelRatio, clientHeight * devicePixelRatio];
  const needResize = width !== w || height !== h;
  if (needResize) {
    renderer.setSize(w, h, false);
  }

  
  return needResize;
} 


const UpdateGeo: React.FC = ():JSX.Element =>{

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => { 
    const { current } = divRef;
    if (current) {
      current.innerHTML = "";
      current.append(renderer.domElement);
      animate();
    }
    
  }, []);
  return <div ref={divRef} className="canvasWrapper"></div>; 

}

export default UpdateGeo;
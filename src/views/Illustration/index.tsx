/**
 * 设置自适应画布
 */
import React,{ 
  useState, 
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
// renderer.setSize(innerWidth, innerHeight); // 要实现画布自适应，需要把这个去掉

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

  const needResize = width !== clientWidth || height !== clientHeight;
  if (needResize) {
    renderer.setSize(clientWidth, clientHeight, false);
  }
  return needResize;
} 


const Illustration: React.FC = ():JSX.Element =>{

  const divRef = useRef<HTMLDivElement>(null);
  let [btnState, setBtnState] = useState(["small", "放大"]);

  const toggle = () => {
    if (btnState[0] === "small") {
      setBtnState(["big", "缩小"]);
    } else {
      setBtnState(["small", "放大"]);
    }
  };


  useEffect(() => {
    const { current } = divRef;
    if (current) {
      current.innerHTML = "";
      current.append(renderer.domElement);
      animate();
    }
    
  }, []);
  return (
    <div className="cont">
      <p>
        立方体，也称正方体，是由6个正方形面组成的正多面体，故又称正六面体。它有12条边和8个顶点。其中正方体是特殊的长方体。立方体是一种特殊的正四棱柱、长方体、三角偏方面体、菱形多面体、平行六面体，就如同正方形是特殊的矩形、菱形、平行四边形一様。立方体具有正八面体对称性，即考克斯特BC3对称性，施莱夫利符号
        ，考克斯特-迪肯符号，与正八面体对偶。
      </p>
      <div className="inllustration">
        <div ref={divRef} className={`canvasWrapper ${btnState[0]}`}></div>
        <button className="btn" onClick={toggle}>
          {btnState[1]}
        </button>
      </div>
      <p>
        立方体有11种不同的展开图，即是说，我们可以有11种不同的方法切开空心立方体的7条棱而将其展平为平面图形，见图1。 [2] 立方体的11种不同展开图。
        如果我们要将立方体涂色而使相邻的面不带有相同的颜色，则我们至少需要3种颜色（类似于四色问题）。
        立方体是唯一能够独立密铺三维欧几里得空间的柏拉图正多面体，因此立方体堆砌也是四维唯一的正堆砌（三维空间中的堆砌拓扑上等价于四维多胞体）。它又是柏拉图立体中唯一一个有偶数边面——正方形面的，因此，它是柏拉图立体中独一无二的环带多面体（它所有相对的面关于立方体中心中心对称）。
        将立方体沿对角线切开，能得到6个全等的正4棱柱（但它不是半正的，底面棱长与侧棱长之比为2:√3）将其正方形面贴到原来的立方体上，能得到菱形十二面体(Rhombic
        Dodecahedron)（两两共面三角形合成一个菱形）。
      </p>
      <p>
        立方体的对偶多面体是正八面体。 当正八面体在立方体之内： 正八面体体积: 立方体体积=[(1/3)×高×底面积]×2: 边=(1/3)(n/2)[(n)/2]2: n=1: 6 星形八面体的对角线可组成一个立方体。
        截半立方体：从一条棱斩去另一条棱的中点得出 截角立方体
        超正方体：立方体在高维度的推广。更加一般的，立方体是一个大家族，即立方形家族（又称超方形、正测形）的3维成员，它们都具有相似的性质（如二面角都是90°、有类似的超体积公式，即Vn-cube=a等）。
        长方体、偏方面体的特例。
      </p>
      <p>
        立方体是唯一能够独立密铺三维欧几里得空间的柏拉图正多面体，因此立方体堆砌也是四维唯一的正堆砌（三维空间中的堆砌拓扑上等价于四维多胞体）。它又是柏拉图立体中唯一一个有偶数边面——正方形面的，因此，它是柏拉图立体中独一无二的环带多面体（它所有相对的面关于立方体中心中心对称）。
        将立方体沿对角线切开，能得到6个全等的正4棱柱（但它不是半正的，底面棱长与侧棱长之比为2:√3）将其正方形面贴到原来的立方体上，能得到菱形十二面体(Rhombic
        Dodecahedron)（两两共面三角形合成一个菱形）。
      </p>
    </div>
  )

}

export default Illustration;
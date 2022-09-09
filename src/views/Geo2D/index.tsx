/**
 * 矩形面 、 圆形 、圆环平面 、二维图形
 */
import React,{ 
  useState, 
  useEffect, 
  useRef
}  from 'react'; 
import { 
  BoxGeometry, 
  BufferGeometry, 
  DirectionalLight, 
  Mesh, 
  MeshNormalMaterial, 
  MeshPhongMaterial, 
  PerspectiveCamera, 
  Scene, 
  WebGLRenderer,
  PlaneGeometry,
  MeshBasicMaterial,
  CircleGeometry,
  RingGeometry,
  ShapeGeometry,
  Shape,
} 
from "three";
import Stage from "../../component/Stage";
import './index.css'

const stage = new Stage(0,0,4 );

const { scene, renderer } = stage;

// 矩形平面
/**
 * PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)
    - width — 平面沿着X轴的宽度。默认值是1。
    - height — 平面沿着Y轴的高度。默认值是1。
    - widthSegments — （可选）平面的宽度分段数，默认值是1。
    - heightSegments — （可选）平面的高度分段数，默认值是1。
 */
// const geometry = new PlaneGeometry(0.5,2 ,2,4)

// 圆形平面
/**
 * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
    - radius — 圆形的半径，默认值为1
    - segments — 分段（三角面）的数量，最小值为3，默认值为8。
    - thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
    - thetaLength — 圆形扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆。
 */
// const geometry = new CircleGeometry(0.5, 16, Math.PI/2, Math.PI/2  )


// 圆环平面
/**
 * RingGeometry(innerRadius : Float, outerRadius : Float, thetaSegments : Integer, phiSegments : Integer, thetaStart : Float, thetaLength : Float)
    - innerRadius — 内部半径，默认值为0.5。
    - outerRadius — 外部半径，默认值为1。
    - thetaSegments — 圆环的分段数。这个值越大，圆环就越圆。最小值为3，默认值为8。
    - phiSegments — 最小值为1，默认值为8。
    - thetaStart — 起始角度，默认值为0。
    - thetaLength — 圆心角，默认值为Math.PI * 2。
 */
// const geometry = new RingGeometry( 0.3, 0.8, 12,2, Math.PI/6, Math.PI/2  )


// 二维图形
/**
 * ShapeGeometry(shapes : Array, curveSegments : Integer)
    - shapes — 一个单独的shape，或者一个包含形状的Array。
    - curveSegments - Integer - 每一个形状的分段数，默认值为12。
 */
const shape = new Shape();
shape.moveTo(0, 0);
shape.bezierCurveTo(
  1, 1, // 控制点1
  -1, 1, // 控制点2
  0, 0  // 结束点
);
const geometry = new ShapeGeometry(shape);


// 法线材质 
{
  const material = new MeshNormalMaterial({
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);
}
{
  const material = new MeshBasicMaterial({
    wireframe: true,
  });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);
}


const Geo2D: React.FC = ():JSX.Element =>{

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = divRef;
    if (current) {
      current.innerHTML = "";
      current.append(renderer.domElement);
      stage.animate();
    }
  }, []);
  
  return <div ref={divRef} className="canvasWrapper"></div>; 

}

export default Geo2D;
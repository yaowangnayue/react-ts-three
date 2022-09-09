/**
 * BoxGeometry 立方体、
 * TetrahedronGeometry 四面体
 * OctahedronGeometry 八面体
 * IcosahedronGeometry 二十面体
 * PolyhedronGeometry 多面体
 * SphereGeometry 球体
 * ConeGeometry  圆锥
 * CylinderGeometry 圆柱
 * TorusGeometry 三维圆环
 * TorusKnotGeometry 扭结
 * 
 * 
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
  TetrahedronGeometry,
  OctahedronGeometry,
  IcosahedronGeometry,
  PolyhedronGeometry,
  SphereGeometry,
  ConeGeometry,
  CylinderGeometry,
  TorusGeometry,
  TorusKnotGeometry,

} 
from "three";
import Stage from "../../component/Stage";
import './index.css'

const stage = new Stage( );

const { scene, renderer } = stage;

/**
 * 立方体
 * BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
    - width — X轴上面的宽度，默认值为1。
    - height — Y轴上面的高度，默认值为1。
    - depth — Z轴上面的深度，默认值为1。
    - widthSegments — （可选）宽度的分段数，默认值是1。
    - heightSegments — （可选）高度的分段数，默认值是1。
    - depthSegments — （可选）深度的分段数，默认值是1。
 */
// const geometry = new BoxGeometry(0.5, 1,3,2,3,4);

/**
 * TetrahedronGeometry 四面体
 * TetrahedronGeometry(radius : Float, detail : Integer)
     - radius — 四面体的半径，默认值为1。
    - detail — 默认值为0。将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个四面体。
 */
// const geometry = new TetrahedronGeometry(1.3, 0 );

/**
 * OctahedronGeometry 八面体
 * OctahedronGeometry(radius : Float, detail : Integer)
    - radius — 八面体的半径，默认值为1。
    - detail — 默认值为0，将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个八面体。
 */
// const geometry = new OctahedronGeometry(1.3, 0 );

/**
 * IcosahedronGeometry 二十面体
 * IcosahedronGeometry(radius : Float, detail : Integer)
    - radius — 二十面体的半径，默认为1。
    - detail — 默认值为0。将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个二十面体。当这个值大于1的时候，实际上它将变成一个球体。
 */
// const geometry = new IcosahedronGeometry(1.3, 0 );

/**
 * PolyhedronGeometry 多面体
 * PolyhedronGeometry(vertices : Array, indices : Array, radius : Float, detail : Integer
    - vertices — 一个顶点Array（数组）：[1,1,1, -1,-1,-1, ... ]。
    - indices — 一个构成面的索引Array（数组）， [0,1,2, 2,3,0, ... ]。
    - radius — Float - 最终形状的半径。
    - detail — Integer - 将对这个几何体细分多少个级别。细节越多，形状就越平滑
 */
// const geometry = new PolyhedronGeometry(
//   [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1],
//   [2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4],
//   1,
//   1
//  );

/**
 * SphereGeometry 球体
 * SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    - radius — 球体半径，默认为1。
    - widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为32。
    - heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为16。
    - phiStart — 指定水平（经线）起始角度，默认值为0。。
    - phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
    - thetaStart — 指定垂直（纬线）起始角度，默认值为0。
    - thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。

    该几何体是通过扫描并计算围绕着Y轴（水平扫描）和X轴（垂直扫描）的顶点来创建的。 

    因此，我们可以通过为phiStart，phiLength，thetaStart和thetaLength属性对球体进行切片
 */
// const geometry = new SphereGeometry(
//   1.5,
//   8,
//   6,
//   // 水平切片
//   0,
//   Math.PI/2,
//   // 垂直切片
//   0,
//   Math.PI/2
// );


/**
 * ConeGeometry  圆锥
 * ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
    - radius — 圆锥底部的半径，默认值为1。
    - height — 圆锥的高度，默认值为1。
    - radialSegments — 圆锥侧面周围的分段数，默认为8。
    - heightSegments — 圆锥侧面沿着其高度的分段数，默认值为1。
    - openEnded — 一个Boolean值，指明该圆锥的底面是开放的还是封顶的。默认值为false，即其底面默认是封顶的。
    - thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
    - thetaLength — 圆锥底面圆扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆锥。
 */
// const geometry = new ConeGeometry(
//   0.5,
//   2,
//   16,
//   2,
//   true,
//   0,
//   Math.PI/2
// );


/**
 * CylinderGeometry 圆柱
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
    - radiusTop — 圆柱的顶部半径，默认值是1。
    - radiusBottom — 圆柱的底部半径，默认值是1。
    - height — 圆柱的高度，默认值是1。
    - radialSegments — 圆柱侧面周围的分段数，默认为8。
    - heightSegments — 圆柱侧面沿着其高度的分段数，默认值为1。
    - openEnded — 一个Boolean值，表示该圆柱的底面和顶面是否开放。默认值为false，即闭合。
    - thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
    - thetaLength — 圆柱底面圆扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆柱。
 */
// const geometry = new CylinderGeometry(
//  1,2,4,16,2,true,0,Math.PI/2
// );


/**
 * TorusGeometry 三维圆环
 * TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)
    - radius - 环面的半径，从环面的中心到管道横截面的中心。默认值是1。
    - tube — 管道的半径，默认值为0.4。
    - radialSegments — 管道横截面的分段数，默认值为8。
    - tubularSegments —圆环x的分段数，默认值为6。
    - arc — 圆环的圆心角（单位是弧度），默认值为Math.PI * 2。
//  */
// const geometry = new TorusGeometry(
//   1.5,
//   0.2,
//   16,16,
//   Math.PI/2
//  );


/**
 * TorusKnotGeometry 扭结
 * TorusKnotGeometry(radius : Float, tube : Float, tubularSegments : Integer, radialSegments : Integer, p : Integer, q : Integer)
    radius - 圆环的半径，默认值为1。
    tube — 管道的半径，默认值为0.4。
    tubularSegments — 扭结线的分段数量，默认值为64。
    radialSegments — 管道分段数量，默认值为8。
    p — 这个值决定了几何体将绕着其旋转对称轴旋转多少次，默认值是2。
    q — 这个值决定了几何体将绕着其内部圆环旋转多少次，默认值是3。
 */
const geometry = new TorusKnotGeometry(2.5, 0.1,128,4, 3,4,

 );


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



const Geo3D: React.FC = ():JSX.Element =>{

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

export default Geo3D;
/**
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
} 
from "three";
import Stage from "../../component/Stage";
import './index.css'

const stage = new Stage(0,0,4 );

const { scene, renderer } = stage;


const geometry = new RingGeometry( 0.3, 0.8, 12,2, Math.PI/6, Math.PI/2  )




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


const PathCompose: React.FC = ():JSX.Element =>{

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

export default PathCompose;
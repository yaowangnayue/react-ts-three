import React, {useEffect} from 'react';
import './App.css';
import MachineRoom from './component/MachineRoom';

// 创建机房对象
let room : MachineRoom;
// 创建canvas画布
let canvas: HTMLCanvasElement;
/**
 * 
 * 以上两个对象之所以不放到App里面，是因为App里面都是和dom交互的，而我们的canvas画布是不需要和dom进行交互的，所以放到外面
 */

 
//
function App() {

  // 组件挂在完毕后，实例化机房对象，渲染机房
  useEffect(()=>{
    if(!canvas){
      return
    };
    console.log('走到这里了');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    room = new MachineRoom(canvas);
    room.loadGLTF('machineRoom.gltf');
    room.animate();
  },[])


  // 鼠标移动事件
  const mouseMove = ({clientX,clientY})=>{
    room.selectCabinet(clientX,clientY)
  }

  // 建立canvas画布后，并通过ref获取其HTMLCanvasElement对象 
  return (
    <div className="App" onMouseMove={mouseMove}>
      <canvas id='canvas' ref={(ele) => (canvas = ele)}></canvas>
    </div>
  );
}



export default App;

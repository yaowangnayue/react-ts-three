import React, {useEffect, useState} from 'react';
import './index.css';
import MachineRoom from '../../component/MachineRoom';
import { getCabinetByName} from '../../server/cabinet'

// 创建机房对象
let room : MachineRoom;
// 创建canvas画布
let canvas: HTMLCanvasElement;
/**
 * 
 * 以上两个对象之所以不放到App里面，是因为App里面都是和dom交互的，而我们的canvas画布是不需要和dom进行交互的，所以放到外面
 */

 
//
function Machine() {
  //信息面板的位置
  const [planePos, setPlanePos] = useState({
    left: 0,
    top:0
  })
  //信息面板的可见性
  const [planeDisplay, setPlaneDisplay] = useState('none')
  //机柜信息
  const [curCabinet,setCurCabinet] = useState({
    //名称
    name:'Loading……',
    //温度
    temperature: 0,
    //容量
    capacity: 0,
    //服务器数量
    count:0
  })
  

  // 组件挂在完毕后，实例化机房对象，渲染机房
  useEffect(()=>{
    if(!canvas){
      return
    };
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    room = new MachineRoom(canvas);
    room.loadGLTF('machineRoom.gltf');
    room.animate();

    

    // 当鼠标移入机会，显示信息面板
    room.onMouseOverCabinet  = ({name})=>{
      setPlaneDisplay('block')

      // 基于cabinet.name获取机柜数据
      getCabinetByName(name).then(res=>{
        const { temperature,capacity, count } = res;
        setCurCabinet({
          name,temperature,capacity,count
        })
      })
    }

    // 当鼠标在机柜上移动，就让信息面板跟随移动
    room.onMouseMoveCabinet = (left,top)=>{
      setPlanePos({
        left,top
      })
    }

    // 当鼠标划出机柜，隐藏信息面板
    room.onMouseOutCabinet = ()=>{
      setPlaneDisplay('none')
    }
  },[])

  // 鼠标移动事件
  const mouseMove = ({clientX,clientY})=>{
    room.selectCabinet(clientX,clientY)
  }


  

  // 建立canvas画布后，并通过ref获取其HTMLCanvasElement对象 
  return (
    <div className="machine" onMouseMove={mouseMove}>
      <canvas id='canvas' ref={(ele) => (canvas = ele)}></canvas>
      <div id='plane' style={{left:planePos.left,top:planePos.top,display:planeDisplay}} >
        <p>机柜名称：{curCabinet.name}</p>
        <p>机柜温度：{curCabinet.temperature}°</p>
        <p>使用情况：{curCabinet.count}/{curCabinet.capacity}</p>
      </div>
    </div>
  );
}



export default Machine;

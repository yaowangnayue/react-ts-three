import React from 'react'; 
import { Link } from 'react-router-dom';
const Basics: React.FC = ():JSX.Element =>{

  return (
    <nav style={{ width: '60%',margin: 'auto'}}>
      <ul>
        <li>
          <Link to='/renderStructure'>renderStructure</Link>
        </li>
        <li>
          <Link to='/machine'>machine</Link>
        </li>
        <li>
          <Link to='/responsiveDesign'>responsiveDesign</Link>
        </li>
        <li>
          <Link to='/illustration'>illustration三维插图</Link>
        </li>
        <li>
          <Link to='/Dpr'>Dpr自适应设备分辨率</Link>
        </li>

        <li>
          ----------------------------------------------------
        </li>
        <li>
          <h2>Fundamentals必备知识</h2>
        </li>
        <li>
          <Link to='/Geo2D'>Geo2D 二维几何体</Link>
        </li>
        <li>
          <Link to='/Geo3D'>Geo3D 三维几何体</Link>
        </li>
        <li>
          <Link to='/PathCompose'>PathCompose 路径合成几何体</Link>
        </li>
        <li>
          <Link to='/LineGeo'>LineGeo 线性几何体</Link>
        </li>
        <li>
          <Link to='/CustomGeo'>CustomGeo 自定义几何体</Link>
        </li>
        <li>
          <Link to='/IndexGeo'>IndexGeo 顶点索引</Link>
        </li>
        <li>
          <Link to='/ComputeNormal'>ComputeNormal 计算法线</Link>
        </li>
        <li>
          <Link to='/UpdateGeo'>UpdateGeo 更新几何体数据</Link>
        </li>
        <li>
          <Link to='/WaveGeo'>WaveGeo 波浪球</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Basics;
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
        
      </ul>
    </nav>
  )
}

export default Basics;
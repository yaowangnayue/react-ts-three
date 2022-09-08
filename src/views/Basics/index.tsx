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
      </ul>
    </nav>
  )
}

export default Basics;
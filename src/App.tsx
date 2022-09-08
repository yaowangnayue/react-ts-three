import React, {useEffect, useState} from 'react';
import { useRoutes} from 'react-router-dom'
import './App.css';
import Machine from './views/MachineRoom';
import Basics from './views/Basics';
import RenderStructure from './views/RenderStructure.tsx';

const App:React.FC = ():JSX.Element=> {

  const routing = useRoutes([
     {
      path:'/',
      element: <Basics/>
     },
     {
      path:'/renderStructure',
      element: <RenderStructure/>
     },
     {
      path:'/machine',
      element: <Machine/>
     },
  ])

  // return (
  //   <Machine/>
  // )

  return <>{routing} </>
}


export default App;

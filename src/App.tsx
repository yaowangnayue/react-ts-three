import React  from 'react';
import { useRoutes} from 'react-router-dom'
import './App.css';
import Machine from './views/MachineRoom';
import Basics from './views/Basics';
import RenderStructure from './views/RenderStructure';
import ResponsiveDesign from './views/ResponsiveDesign';
import Illustration from './views/Illustration'
import Dpr from './views/Dpr';
import Geo2D from './views/Geo2D';
import Geo3D from './views/Geo3D';
import PathCompose from './views/PathCompose'
import LineGeo from './views/LineGeo';
import CustomGeo from './views/CustomGeo';
import IndexGeo from './views/IndexGeo';
import ComputeNormal from './views/ComputeNormal';
import UpdateGeo from './views/UpdateGeo';
import WaveGeo from './views/WaveGeo';


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
     {
      path:'/responsiveDesign',
      element: <ResponsiveDesign/>
     },
     {
      path:'/illustration',
      element: <Illustration/>
     },
     {
      path:'/Dpr',
      element: <Dpr/>
     },
     {
      path:'/Geo2D',
      element: <Geo2D/>
     },
     {
      path:'/Geo3D',
      element: <Geo3D/>
     },
     {
      path:'/PathCompose',
      element: <PathCompose/>
     },
     {
      path:'/LineGeo',
      element: <LineGeo/>
     },
     {
      path:'/CustomGeo',
      element: <CustomGeo/>
     },
     {
      path:'/IndexGeo',
      element: <IndexGeo/>
     },
     {
      path:'/ComputeNormal',
      element: <ComputeNormal/>
     },
     {
      path:'/UpdateGeo',
      element: <UpdateGeo/>
     },
     {
      path:'/WaveGeo',
      element: <WaveGeo/>
     },
  ])

  return <>{routing} </>
}


export default App;

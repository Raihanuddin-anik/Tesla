import './App.css';
import Model3 from './Component/Model3/Model3';
import ModelS from './Component/ModelS/ModelS';
import ModelX from './Component/ModelX/ModelX';
import ModelY from './Component/ModelY/ModelY';
import NavTop from './Component/NavTop/NavTop';
import SolarPanel from './Component/Solar panels/SolarPanel';
import SolarRoof from './Component/Solar Roof/SolarRoof';

function App() {
  return (
    <div >
      <NavTop></NavTop>
      <Model3></Model3>
      <ModelS></ModelS>
      <ModelX></ModelX>
      <ModelY></ModelY>
      <SolarPanel></SolarPanel>
      <SolarRoof></SolarRoof>
    </div>
  );
}

export default App;

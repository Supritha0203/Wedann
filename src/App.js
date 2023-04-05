import './App.css';
import About from './screens/About';
import CreateMemory from './screens/CreateMemory';
import './screens/Home';
import Home from './screens/Home';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <Routes>
<Route path ='/' element={<Home/>} ></Route>
<Route path = '/about' element={<About/>}></Route>
<Route path= '/creatememory' element={<CreateMemory/>}></Route>

   </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Informer } from './pages/informer/Informer';
import { Agir } from './pages/agir/Agir';
import { Home } from './pages/home/Home';
import {axios} from 'axios';
import { EventDetails } from './components/eventDetails/EventDetails';


function App() {
  return (
    <div className="App">
    
     
     
     <div className='pages'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agir" element={ <Agir/>} />
        <Route path="/informer" element={<Informer/>} />
        <Route path="/eventdetails/:id" element={<EventDetails/>} />
        

      </Routes>
      </div>

    </div>
  );
}

export default App;


import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Informer } from "./pages/informer/Informer";
import { Agir } from "./pages/agir/Agir";
import { Home } from "./pages/home/Home";
import { Form } from "./components/form/Form";
import { EventDetails } from './components/eventDetails/EventDetails';
import { Login } from "./pages/login/Login";
import MyProfile from "./pages/myprofile/MyProfile";
import { axios } from "axios";

function App() {
 return (
  <div className="App">
   <div className="pages">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/myprofile" element={<MyProfile />} />
     <Route path="/agir" element={<Agir />} />
     <Route path="/informer" element={<Informer />} />
     <Route path="/eventdetails/:id" element={<EventDetails/>} />
     <Route path="/form" element={<Form />} />
    </Routes>
   </div>
  </div>
 );
}

export default App;

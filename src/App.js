<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Informer } from "./pages/informer/Informer";
import { Agir } from "./pages/agir/Agir";
import { Home } from "./pages/home/Home";
<<<<<<< Updated upstream
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
     <Route path="/agir/:id" element={<EventDetails/>} />
     <Route path="/form" element={<Form />} />
    </Routes>
   </div>
  </div>
 );
=======
import { axios } from "axios";
import { ArticleList } from "./components/scraping/ArticleList";

function App() {
  return (
    <div className="App">
      <Informer />
    </div>
  );
>>>>>>> Stashed changes
}

export default App;

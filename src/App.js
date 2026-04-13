import './App.css';
import './mobile.css';
import Photobooth from './components/photobooth';
import Homestart from './components/home';
import Camera from "./components/camera";
import Editor from './components/editor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Photobooth />} />
          <Route path="/home" element={< Homestart />}></Route>
          <Route path="/camera" element={<Camera />} />
          <Route path="/editor" element={<Editor />} />
          
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

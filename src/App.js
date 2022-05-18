import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addemp from './Component/Addemp';
import Searchemp from './Component/Searchemp';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>

       <Route path="/"exact element={<Addemp/>}/>
       <Route path="/search"exact element={<Searchemp/>}/>
     </Routes>
     
     </BrowserRouter>
    
    </div>
  );
}

export default App;

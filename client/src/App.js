import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './component/add';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
<BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Add/>} />
      
    </Routes>
    </BrowserRouter> 
    </>
  );
}
 
export default App;

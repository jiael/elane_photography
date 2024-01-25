import React from 'react';
import ReactImageGallery from "./ReactImageGallery";
import Navbar from "./Navbar";
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import About from './About';
import Featured from './Featured';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ReactImageGallery/>}/>
          <Route path='/featured' element={<Featured/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;

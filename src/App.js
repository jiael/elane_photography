import React from 'react';
import ReactImageGallery from "./ReactImageGallery";
import Navbar from "./Navbar";
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import About from './About';
import Featured from './Featured';

function App() {
  return (
    <Router>
      <Navbar/>
      <ReactImageGallery/>
      <Routes>
        <Route path='/elane_photography' element={<ReactImageGallery/>}/>
        <Route path='/elane_photography/featured' element={<Featured/>}/>
        <Route path='/elane_photography/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;

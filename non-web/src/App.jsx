import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import HomePage from './components/HomePage'; // ตรวจสอบเส้นทางไฟล์ให้ถูกต้อง
import AboutPage from './components/AboutPage'; // ตรวจสอบเส้นทางไฟล์ให้ถูกต้อง
import DataTablefull from './components/DataTablefull';
import First from './components/First';
import TestPage from './components/TestPage';
import OnePage from './components/one';
import TwoPage from './components/two';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<First />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/datatable" element={<DataTablefull/>}/>
        <Route path='/test' element={<TestPage/>}/>
        <Route path="/one" element={<OnePage/>}/>
        {/* <Route path='/two' element={TwoPage}/> */}
        {/* <Route path="/first" element={<First/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
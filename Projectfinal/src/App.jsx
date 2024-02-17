import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DataTable from './components/DataTable';
import ST from './components/ST';
import logo from '../rbl.jpeg'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const HomePage = () => (
  <div className="App">
    <div className="center">
      <img src={logo} alt="Logo" className="image" />
      <button 
        onClick={() => setCurrentPage('st')}
        className="button"
      >
        Welcome to the RobotLAB Thailand
      </button>
    </div>
  </div>

  );

  return (
    <>
      <div className="App">
        {/* {currentPage === 'home' && <DataTable />} */}
        {currentPage === 'st' && <ST />}
      </div>
      <div>
        {currentPage === 'home' && <HomePage />}
        {/* {currentPage === 'st'   && <HomePage />} */}
      </div>
      
      
    </>

  )
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataTable from './components/DataTable';
// import TestGetData from './components/testGetData';
// import DataTablefull from './components/DataTablefull';



function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('home');
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const HomePage = () => (
    <div>
      <h1>หน้าแรก</h1>
      <button onClick={() => goToPage('about')}>ไปที่หน้าเกี่ยวกับ</button>
    </div>
  );

  return (
    <>
      <div>
      </div>
      <div className="App">
        <DataTable />
      </div>
      <div>
        {currentPage === 'home' && <HomePage />}

      </div>
      {/* <div className="App">
        <DataTablefull />
      </div> */}
      {/* <div className="App">
        <testGetData />
      </div> */}
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
    </>
  )
}

export default App

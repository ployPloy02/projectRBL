import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../rbl.jpeg'; 

function Home() {
  return (
    <div>
      {/* <img src={logo} alt="Logo" style={{ width: '390px', height: '390px', marginTop: '-80px' }} /> */}
      <h2 style={{ marginLeft: '10px', marginTop: '-50px' }}>Welcome to the Home Page!</h2>
      <Link to="/nextpage">
        <button style={{ marginLeft: '10px', marginTop: '20px' }}>Go to Next Page</button>
      </Link>
    </div>
  );
}

export default Home;

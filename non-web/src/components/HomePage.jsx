import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const goToAboutPage = () => navigate('/about');
  const goToDataPage = () => navigate('/datatable');
  const goTofirstPage = () => navigate('/first');


  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} aria-label="Increment counter">
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR (Hot Module Replacement)</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Using Link for navigation */}
      {/* <Link to="/about" className="link-to-about">Go to About Page</Link>
      <Link to="/datatable" className="link-to-about">Go to data</Link> */}
      {/* Using buttons for navigation */}
      <button onClick={goToAboutPage} className="link-to-about">Go to About Page</button> 
      <button onClick={goToDataPage} className="link-to-about">Go to data</button>
      <button onClick={goTofirstPage} className="link-to-about">Go to first</button>

    </div>
  );
}

export default HomePage;

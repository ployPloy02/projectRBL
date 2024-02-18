import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';

function one() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate('/');
  const goToDataPage = () => navigate('/datatable');
  const goTofirstPage = () => navigate('/first');
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={goToHomePage} className="link-to-about">Go back to Home</button>
      <button onClick={goToDataPage} className="link-to-about">Go to data</button>
      <button onClick={goTolv1Pag} className="link-to-about">Go to data</button>
    </div>
  );
}

export default one;

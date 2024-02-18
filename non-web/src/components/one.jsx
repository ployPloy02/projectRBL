import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';

function one() {
  const navigate = useNavigate();
  // const goToHomePage = () => navigate('/');
  // const goToDataPage = () => navigate('/datatable');
  return (
    <div>
      <h2>Level 1</h2>
      {/* <button onClick={goToHomePage} className="link-to-about">Go back to Home</button>
      <button onClick={goToDataPage} className="link-to-about">Go to data</button> */}
    </div>
  );
}

export default one;

import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate('/');
  const goToDataPage = () => navigate('/datatable');
  const goTofirstPage = () => navigate('/first');
  const goToonePage = () => navigate('/one');
  
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={goToHomePage} className="link-to-about">Go back to Home</button>
      <button onClick={goToDataPage} className="link-to-about">Go to data</button>
      <button onClick={goToonePage} className="link-to-about">Go to one</button>

    </div>
  );
}

export default AboutPage;

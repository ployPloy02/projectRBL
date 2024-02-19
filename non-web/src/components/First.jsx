import React from 'react';
import './First.css';
import { Link ,useNavigate} from 'react-router-dom';
import logo from './images/rbl.jpeg'


function First() {
  const navigate = useNavigate();
  const goToAboutPage = () => navigate('/about');
  const goToDataPage = () => navigate('/datatable');
  const goTofirstPage = () => navigate('/first');
  const goToTestPage = () => navigate('/test');
  const goToonePage = () => navigate('/one');

  return (
    <div className="first-container">
      <h2>First Page</h2>
      <div className="image-container">
        <img src={logo} alt="Logo" className="centered-image" />
      </div>
      <div className="button-container">
        <button onClick={goToAboutPage} className="link-to-about">Go to About Page</button>
        <button onClick={goToDataPage} className="link-to-about">Go to Data</button>
        <button onClick={goToTestPage} className="link-to-about">Go to Test</button>
      </div>
    </div>
  );
}

export default First;

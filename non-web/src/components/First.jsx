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

  return (
    <div className="first-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="centered-image" />
      </div>
      <div className="button-container">
        <button onClick={goToDataPage} className="link-to-about">Welcome to the RobotLAB Thailand!</button>
      </div>
    </div>
  );
}แ

export default First;

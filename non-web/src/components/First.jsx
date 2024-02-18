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
    <div>
      <h2>First Page</h2>
      <img src={logo} alt="Logo" style={{ width: '390px', height: '390px', marginTop: '-80px' }} />
      <h2 style={{ marginLeft: '10px', marginTop: '-50px' }}>Welcome to the RobotLAB Thailand!</h2>
      <button onClick={goToAboutPage} className="link-to-about">Go to About Page</button> 
      <button onClick={goToDataPage} className="link-to-about">Go to data</button>
      <button onClick={goToTestPage} className="link-to-about">Go to test</button>
    </div>
  );
}

export default First;

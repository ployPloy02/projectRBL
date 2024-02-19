import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import logo from './images/rbl.jpeg'


function one() {
  const navigate = useNavigate();


  return (
    <div className="first-container">
      <h2>First Page</h2>
    </div>
  );
}

export default one;

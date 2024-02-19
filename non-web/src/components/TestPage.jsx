import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Test.css'; 
import logo from './images/rbl.jpeg'

function TestPage() {
    const navigate = useNavigate();
    const goToHomePage = () => navigate('/');

    const [data, setData] = useState({});
    const [count, setCount] = useState(0);

    const sendData = () => {
        const inputData = document.getElementById('inputData').value;

        const data = {
            "name": inputData
        };

        axios.post('http://127.0.0.1:8000/findData', data)
            .then(response => {
                console.log('Response:', response.data);
                setData({
                    date: response.data[0][0],
                    name: response.data[0][1],
                    age: response.data[0][2],
                    level: response.data[0][3],
                    course: response.data[0][4]
                });
                setCount(prevCount => prevCount + 1);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
            <div>
                <div className="image-aboutdata">
            <img src={logo} alt="Logo" className="aboutdata-image" />
            </div>
            <h2 style={{ display: 'table', margin: '0 auto' }}>Table displaying student attendance.</h2>
            <h2>test</h2>
            <button onClick={goToHomePage} className="link-to-about">Go back to Home</button>
            <input type="text" id="inputData" />
            <button onClick={sendData}>Submit</button>
            <p>Count of Class: {10 - count}</p>
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Level</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {data && (
                        <tr>
                            <td>{data.date}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.level}</td>
                            <td>{data.course}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TestPage;

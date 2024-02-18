import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function TestPage() {
    const navigate = useNavigate();
    const goToHomePage = () => navigate('/');

    const sendData = () => {
        const inputData = document.getElementById('inputData').value;

        // สร้าง object ที่จะส่งเป็น JSON
        const data = {
            "name": inputData
        };

        // ใช้ Axios ส่งข้อมูล
        axios.post('http://172.20.10.5:8000/testRxData', data)
            .then(response => {
                console.log('Response:', response.data);
                // ตัวอย่างการใช้งาน response ตอบกลับจากเซิร์ฟเวอร์
            })
            .catch(error => {
                console.error('Error:', error);
                // ตัวอย่างการใช้งาน error เมื่อเกิดข้อผิดพลาดในการส่งข้อมูล
            });
    };

    return (
        <div>
            <h2>test</h2>
            <button onClick={goToHomePage} className="link-to-about">Go back to Home</button>
            <input type="text" id="inputData" />
            <button onClick={sendData}>Submit</button>
        </div>
    );
}

export default TestPage;

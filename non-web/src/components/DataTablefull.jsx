import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTablefull = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0); // เพิ่ม State สำหรับเก็บค่า Count
  useEffect(() => {
    axios.get('http://172.20.10.5:8000/data')
      .then(response => {
        setData(response.data.data);
        setCount(response.data.data.length); // ตั้งค่าค่า Count
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error_test: {error}</div>;
  }

  return (
    <div>
      <h2>TABLE</h2>
      {/* <p>Count of Class: {10 - count}</p> */}
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Lastname</th>
            <th>Nickname</th>
            <th>Age</th>
            <th>Level</th>
            <th>Course</th>
           


            {/* เพิ่มหัวข้อตารางเพิ่มเติมตามความต้องการ */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
    
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
              <td>{item.column5}</td>
              <td>{item.column6}</td>
              {/* <td>{item.column3 || 'N/A' }</td> */}
              {/* เพิ่มเซลล์ตารางเพิ่มเติมตามความต้องการ */}
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTablefull;

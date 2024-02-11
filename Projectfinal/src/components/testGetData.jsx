import React, { Component } from 'react';
import axios from 'axios';

class TestGetData extends Component {  state = {
    data: [],
    error: null
  };

  componentDidMount() {
    axios.get('http://192.168.3.13:8000/data')
    .then(response => {
      console.log('API Data:', response.data);
      const data = response.data.data;
      this.setState({ data, error: null });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      this.setState({ error });
    });  
  }

  render() {
    console.log(data)
    const { data, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Data List</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <p>ID: {item.id}</p>
              <p>Column 1: {item.column1}</p>
              <p>Column 2: {item.column2 !== null ? item.column2 : 'N/A'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestGetData;

import React from 'react'
import Axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null)
  const generate = () => {
const api = ''
    Axios.get('/users').then(res => {
      console.log(res.data)
      // setData(res.data)

    })
    // window.open(`http://localhost:2324/generate-csv/all/all/all/waiting_approve`, '_blank')
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => generate()}>
          <h1>Get All Users</h1>
        </button>
      {data ? data.map((data, index) => {
        return <p key={index}>{data.name}</p>
      }) : <p>null</p>}
      </header>

    </div>
  );
}

export default App;

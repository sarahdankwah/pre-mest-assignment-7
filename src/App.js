import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {

    let response = await fetch('http://localhost:5000/api/v1/find')
    response = await response.json()

    setData(response.data)
  }
  return (
    <div className="App">
      <table border="1">
        <thead>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </thead>
        <tbody>
         {
           data.map((data,key) => <tr key={key}>
           <td>{data.firstname}</td>
           <td>{data.lastname}</td>
           <td>{data.email}</td>
         </tr>)
         } 
        </tbody>
      </table>
    </div>
  );
}

export default App;

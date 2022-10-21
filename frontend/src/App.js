
import { useState, useEffect } from 'react';
import './App.css'
function App() {
const [example, setExample] = useState([]);
useEffect(() => {
url()
}, [])
//fetching data from 3rd party website
const url = async () => {
const r = await fetch("https://jsonplaceholder.typicode.com/users")
setExample(await r.json())
}
return (
<div className="App">
  
  <h4>Application Testing 3rd party APIs</h4>
  <span>Learned 3rd party API's from https://medium.com/@babux1/how-to-display-third-party-api-data-using-react-js-951c5b2e27da.</span><br></br>
  <span>Note: The api information can be found at https://jsonplaceholder.typicode.com/users</span>
  {/*table for displaying data*/}
  <div>
    <table className=''>
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Company</th>
      </thead>
      <tbody>
        { /*display data*/
          example.map((data) => {
            return(
                    <tr className='active-row'>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.company.name}</td>
                    </tr>
                )
            })}
      </tbody>
    </table>
  </div>
</div>
);
}
export default App;
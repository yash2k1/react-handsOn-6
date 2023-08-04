import React,{useContext} from 'react'
import './StudentStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import Store from '../Components/Store';

function Student() {
  const navigate=useNavigate()
const storeData=useContext(Store);
  const ToForm=()=>{
    // navigate('/form',{state:{id:storeData.length}})
    navigate('/form')
  }
  
  return (
    <>
    <header>
      <div className="stud">Sudents Details</div>
      <button onClick={ToForm} className="add">Add new Students</button>
    </header>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
  
      {
        storeData.map((data,index)=>{
       return( <tr key={index}>
          <td>{data.Name}</td>
          <td>{data.Age}</td>
          <td>{data.Course}</td>
          <td>{data.Batch}</td>
          <td><Link to={'/form/'+index}>Edit</Link></td>
          </tr>)
        })
      }
    
 

    </table>
    </>
  )
}

export default Student
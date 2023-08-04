import React from 'react'
import { Link } from 'react-router-dom';
import './NavbarStyle.css'
const Navbar=()=>{
   return(
<>
  <div className="nav">
    <Link to='/'  className='nonActiveNav' >Home</Link>
    <Link to='/students' className='nonActiveNav' >Student</Link>
    <Link to='/contact' className='nonActiveNav' >Contact</Link>
  </div>
</>
   ); 
}
export default Navbar;
import React, { useEffect, useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { login } from '../../redux/features/BuySlice'
import { authlogin } from '../../redux/features/authSlice'

const Aminlogin = ({ setIsAuthenticated }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setdata] = useState({
    User:'Admin#6543',
    Pass:'Abc908X765'
  })

  const handlelogin = (e) =>{
    const { name,value} = e.target;
    setdata((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));  
  }

  const submit = () =>{
    if(data.User != '' && data.Pass != ''){
      setIsAuthenticated(true);
      dispatch(authlogin({data,navigate}))
    }
  }

  console.log(data)
  return (
    <div className='login'>
      <div className="box">
          <h2>Login as Admin</h2>
          <input type="text" placeholder='username' name='User' value={data.User} className='inputU' onChange={handlelogin}/>
          <input type="Password" placeholder='Password' name='Pass'value={data.Pass} className='inputP' onChange={handlelogin}/>
          <button className='Login-btn' onClick={submit}>Login Now..</button>
      </div>
    </div>
  )
}

export default Aminlogin

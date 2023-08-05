import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../components/css/login.css';


const Login = () => {
  const [Userinfo , setUserinfo] = useState({email:"" , password:""});
  const onchange = (e) =>{
        setUserinfo({...Userinfo , [e.target.name]:e.target.value})
  }

  
  
  return (
    <>
      <form >
        <div className="container1">
          <div className="contain">
            <div className="left">
              <h1 className='heading'>User login</h1>
              <input type="text" placeholder='Username' className='user' name='email' value={Userinfo.email} onChange={onchange} /*autoComplete="new"*/ />
              <input type="password" placeholder='Password' className='user' name='password' value={Userinfo.password} onChange={onchange}/>
              <div className="forget">
                <div className="forgest-left">
                  <input type='checkbox' /> <span>Remember</span>
                </div>
                <div className="forgest-right">
                  <div>Forget Password?</div>
                </div>
              </div>
              <button className='btn'>SUBMIT</button>
            </div>
            <div className="right">
              <img src="../images/img1.png" alt="loginimg" className='logo2' />
              <a to='/signup' className='btn4'>Sign up</a>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
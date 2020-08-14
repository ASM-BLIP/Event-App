import React from 'react';

const Register =() => {
  return (
    <div className="container">
      <div className="header">
        <h2>Register</h2>
      </div>
      <form className="form" id="form">
        <div className="form-control">
          <label>Username</label>
          <input type="text" name="" id="username" placeholder="Enter your full name"></input>
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>ERROR</small>
        </div>
      </form> 
    </div>
  )
}

export default Register;
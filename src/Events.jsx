import React from 'react';
import './Events.css'
import { NavLink } from 'react-router-dom';

const Events =() => {
  return (
    <>
    <h1> Welcome To Events </h1> <br></br>
    <img src="https://www.bayhospitalscharity.org/wp-content/uploads/2019/05/Events-1.jpg"/>
    <h1>Event 1</h1>
    <NavLink to='./register'>Register</NavLink>
    
    </>
      
  )
}

export default Events;
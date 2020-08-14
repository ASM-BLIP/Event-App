import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Events from './Events';
import Navbar from './Navbar';
import Register from './Register';

const App =() => {
  return (
    <>
    <Navbar/>   
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/events" component={Events} />
       <Route exact path="/register" component={Register} />
       <Redirect to="/" />
     </Switch>
    </> 
  )
}

export default App;















   


import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import SignIn from './FormSignin';
import SignUp from './FormSignup';
import AppAdd from './AppAdd';

const App = () => {
  
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/appadd' component={AppAdd} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Jobs } from './components/Jobs';
import { User, UserHome, UserRegistration, SignUp } from './components/Users';
import { EmployerHome } from './components/Employers';
import { NotFound } from './components/Templates';
import Radium from 'radium';

const Main = (props) => (
  <main style={{marginTop: 76}}>
    <Switch>
      <Route exact path='/' render={(props) => (
          <Home {...props}/>
      )}/>
      <Route path='/jobs' render={(props) => (
          <Jobs {...props}/>
      )}/>
      <Route path='/users' component={UserHome} {...props}/>
      <Route exact path='/employers' component={EmployerHome} {...props}/>
      <Route exact path='/profiles' component={User} {...props}/>
      <Route exact path='/register' component={UserRegistration} {...props}/>
      <Route exact path='/login' component={SignUp} {...props}/>
      <Route exact path='/profiles' component={User} {...props}/>
      <Route exact path='*' component={NotFound} {...props}/>
    </Switch>
  </main>
);

export default Radium(Main);

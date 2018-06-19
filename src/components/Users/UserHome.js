import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EditProfile } from '.';

const UserHome = (props) => (
  <Switch>
    <Route path='/users/:userId/edit' component={EditProfile} {...props}/>
  </Switch>
)

export default UserHome;

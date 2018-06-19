import React from 'react';
import {SignUp} from '../Users';
import {Loader} from '../Shared';
import './LogInLayout.css';
import loginBackground from '../../images/login-bg.jpg';

const styles = {
  main: {
    background: `url(${loginBackground}) center 120px no-repeat`,
    backgroundColor: '#093949',
    zIndex: -0
  }
}

const LogInLayout = (props) => (
  <div style={styles.main} className="clearfix">
    <SignUp/>
    <Loader/>
  </div>
)

export default LogInLayout;

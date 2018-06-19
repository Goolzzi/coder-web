import React from 'react';
import {Header, Footer} from '../Templates';
import back_to from '../../images/back_to.png';
import Radium from 'radium';
import Main from '../../Main';
import './DefaultLayout.css';
import {Loader} from '../Shared';

const styles = {
  backToTop: {
    position: 'fixed',
    bottom: 10,
    right: 15
  }
}

const BackToTop = () => (
  <div style={styles.backToTop} className="scrollup pull-right"><img alt="Back to Top" src={back_to}/></div>
)

const DefaultLayout = (props) => (
  <div>
    <Header {...props}/>
    <Main {...props}/>
    <Footer {...props}/>
    <BackToTop/>
    <Loader/>
  </div>
)

export default Radium(DefaultLayout);

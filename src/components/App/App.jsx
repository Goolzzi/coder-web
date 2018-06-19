import React, {Component} from 'react';
import '../../styles/bootstrap-combined.min.css';
import '../../styles/animate.css';
import '../../styles/font-awesome.css';
import '../../styles/RalewayFontcss.css';
import '../../styles/custom.css';
import Radium, {StyleRoot} from 'radium';
import {DefaultLayout, LogInLayout} from '../Layouts';
import {Switch, Route} from 'react-router-dom';
import Utils from '../../lib/utils';

class App extends Component {
  render() {
    const styles = {
      container: {
        backgroundColor: '#093949',
        minHeight: '100%'
      }
    }

    const user = Utils.getCurrentUser();

    return (
      <StyleRoot>
        <div className="app" style={styles.container}>
          <Switch>
            <Route path='/login' render={() => (<LogInLayout user={user}/>)}/>
            <Route path='*' render={() => (<DefaultLayout user={user}/>)}/>
          </Switch>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

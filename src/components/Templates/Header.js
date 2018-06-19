import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png';
import Radium from 'radium';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../../styles/custom.css'
import './Header.css';
import Utils from '../../lib/utils'

const styles = {
  container: {
    background: '#0a3949',
    color: '#fff',
    fontWeight: 400,
    fontSize: 16,
    borderRadius: 0,
    border: 0,
    padding: 13
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0 20px',
    ':hover': {
      color: '#39b54a'
    }
  },
  logo: {
    padding: '4px 0'
  },
  toggle: {
    border: '#27a338',
    background: '#27a338'
  }
}

class Header extends Component {
  render() {
    const {user} = this.props;
    return (
      <Navbar style={styles.container} fluid fixedTop className="header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link style={styles.logo} to="/"><img src={logo} alt="QuirkyCoders"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle id="nav-toggle" style={styles.toggle}/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem style={styles.link} href="/jobs">Search</NavItem>
            <NavItem style={styles.link} href="/employers/dashboard">Dashboard</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem style={styles.link} href="/employers">Post Jobs</NavItem>
            {Utils.isSignIn()
              ? <NavItem style={styles.link} href="/profiles">{`${user.fname} ${user.lname}`}</NavItem>
              : <NavItem style={styles.link} href="/login">Signin / Register</NavItem>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Radium(Header)

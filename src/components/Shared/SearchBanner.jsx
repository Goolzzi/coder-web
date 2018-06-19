import React from 'react';
import Radium from 'radium';
import employee_banner_bg from '../../images/employee_banner_bg.jpg';
import { Row, Col } from 'react-bootstrap';
import { Button, TextBox } from '../Shared/FormHelpers'

const styles = {
  employee_banner: {
    fontFamily: 'Raleway',
    background: `url(${employee_banner_bg}) top center repeat-x`,
    margin: 0,
    padding: '100px 0 40px',
    '@media screen and (min-width: 992px)': {
      padding: '230px 0 290px',
    },
    h1: {
      width: '100%',
      textAlign: 'center',
      margin: '0 0 20px',
      color: '#39b54a',
      fontWeight: 400,
      fontSize: 28,
      '@media screen and (min-width: 992px)': {
        fontSize: 40,
      }
    },
    p: {
      color: '#fff',
      textAlign: 'center',
      width: '60%',
      margin: 'auto'
    },
    noGutter: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}

const Header = () => (
  <h1 style={styles.employee_banner.h1}>Search Across 83,977 Tech Jobs</h1>
)

const Body = (props) => (
  <Row style={styles.employee_banner.noGutter}>
    <Col xs={12} md={4} mdOffset={2}>
      <TextBox {...props}  type="text" name="keywords" placeholder="Job title, keywords or company name"/>
    </Col>
    <Col xs={12} md={2}>
      <TextBox {...props}  type="text" name="location" placeholder="City or State"/>
    </Col>
    <Col xs={12} md={2}>
      <Button {...props} type="submit" value="Search"/>
    </Col>
  </Row>
)

const Footer = () => (
  <p style={styles.employee_banner.p}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
)

const SearchBanner = (props) => (
  <div style={styles.employee_banner} className="search-banner">
    <Header />
    <Body {...props}/>
    <Footer />
  </div>
)

export default Radium(SearchBanner);

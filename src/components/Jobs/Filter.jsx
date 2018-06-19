import React, { Component } from 'react';
import filter_img from '../../images/filter.png';
import plush_icon from '../../images/plush-icon.png';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Radium from 'radium';

const styles = {
  container: {
    border: '1px solid #dfe1e4',
    borderRadius: 5,
    margin: '20px 0'
  },
  h2: {
    width: '100%',
    float: 'left',
    padding: '17px 6%',
    color: '#0a3949',
    fontWeight: 700,
    fontSize: 16,
    backgroundColor: '#dfe1e4',
    margin: 0,
    borderRadius: '5px 5px 0 0'
  },
  menu: {
    borderTop: '1px solid #dfe1e4',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    fontWeight: 'normal',
    textDecoration: 'none',
    lineHeight: 1,
    position: 'relative'
  },
  menuList: {
    margin: 0,
    padding: 0,
    border: 0,
    listStyle: 'none',
    fontWeight: 'normal',
    textDecoration: 'none',
    lineHeight: 1,
    position: 'relative'
  },
  menuListItem: {
    margin: 0,
    padding: 0,
    borderTop: '1px solid #dfe1e4',
    listStyle: 'none',
    fontWeight: 'normal',
    textDecoration: 'none',
    lineHeight: 1,
    position: 'relative'
  },
  link: {
    width: '100%',
    padding: '15px 7% 8px',
    fontWeight: 500,
    display: 'block',
    color: '#184453',
    fontSize: 16,
    outline: 'none',
    lineHeight: 1.3
  },
  subMenu: {
    display: 'none'
  }
}

class Filter extends Component {
  render() {
    return (
      <Grid style={styles.container} fluid={true} className="hidden-xs">
        <Row>
          <Col>
            <h2 style={styles.h2}><img src={filter_img} alt="Filter Results"/>&nbsp;&nbsp;Filter Results</h2>
            <Clearfix />
            <div style={styles.menu}>
              <ul style={styles.menu}>
                <li style={styles.menuListItem} className='has-sub'>
                  <a style={styles.link} href="return false;">Title<span><img className="pull-right" src={plush_icon} alt=""/></span>
                  </a>
                  <ul style={styles.subMenu}>
                    <li>
                      <span>
                        <input className="css-checkbox" type="checkbox"/>
                        <label className="css-label">title</label>
                      </span>
                    </li>
                  </ul>
                </li>
                <li style={styles.menuListItem} className='has-sub'>
                  <a style={styles.link} href="return false;">City<span><img className="pull-right" src={plush_icon} alt=""/></span>
                  </a>
                  <ul style={styles.subMenu}>
                    <li>
                      <span>
                        <input className="css-checkbox" type="checkbox"/>
                        <label className="css-label">Charleston</label>
                      </span>
                    </li>
                  </ul>
                </li>
                <li style={styles.menuListItem} className='has-sub'>
                  <a style={styles.link} href="return false;">State<span><img className="pull-right" src={plush_icon} alt=""/></span>
                  </a>
                  <ul style={styles.subMenu}>
                    <li>
                      <span>
                        <input className="css-checkbox" type="checkbox"/>
                        <label className="css-label">South Carolina</label>
                      </span>
                    </li>
                  </ul>
                </li>
                <li style={styles.menuListItem} className='has-sub'>
                  <a style={styles.link} href="return false;">Country<span><img className="pull-right" src={plush_icon} alt=""/></span>
                  </a>
                  <ul style={styles.subMenu}>
                    <li>
                      <span>
                        <input className="css-checkbox" type="checkbox"/>
                        <label className="css-label">United States</label>
                      </span>
                    </li>
                  </ul>
                </li>
                <li style={styles.menuListItem} className='has-sub'>
                  <a style={styles.link} href="return false;">Employment Type<span><img className="pull-right" src={plush_icon} alt=""/></span>
                  </a>
                  <ul style={styles.subMenu}>
                    <li>
                      <span>
                        <input id="fulltimeemp" className="css-checkbox" type="checkbox"/>
                        <label className="css-label">Full Time</label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input id="parttimeemp" className="css-checkbox" type="checkbox"/>
                        <label className="css-label">Part Time</label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input id="thirdpartyemp" className="css-checkbox" type="checkbox"/>
                        <label className="css-label">Third Party</label>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Radium(Filter);

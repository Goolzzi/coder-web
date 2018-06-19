import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import JobList from './JobList';
import msg_icon from '../../images/msg-icon.png';
import { Grid, Row, Col } from 'react-bootstrap';
import Radium from 'radium';

const styles = {
  h1: {
    fontSize: 24,
    fontFamily: 'Raleway',
    color: '#0a3949',
    fontWeight: 700
  },
  button: {
    margin: "15px 0 0 0"
  }
}

const JobListContainer = (props) => (
  <Grid>
    <Row>
      <Col md={3}>
        <Filter />
      </Col>
      <Col md={9} className="clearfix">
        <Row>
          <Col xs={5} sm={7} md={8} lg={8} className="clearfix">
            <div>
              <h1 style={styles.h1}>All Jobs</h1>
              <p className="hidden-xs">Displaying {props.jobs.length} out of {props.totalJobs}</p>
            </div>
          </Col>
          <Col xs={7} sm={5} md={4} lg={4} className="text-right clearfix">
            <button style={styles.button} type="button" className="btn btn-primary pull-right">
              <Link to="#" style={{color: '#fff'}} >
                <img style={{marginRight: 10}} src={msg_icon} alt="Create Job Alert"/> Create Job Alert
              </Link>
            </button>
          </Col>
        </Row>
        <Row className="clearfix">
          <Col lg={12} className="clearfix">
            <JobList jobs={props.jobs} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default Radium(JobListContainer)

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

export default class JobRow extends Component {
    address(job) {
      let cityState = job.city && job.city + ', ' + job.state
      return cityState || job.state
    }

    teaser(message) {
      let maxLength = 120; // maximum number of characters to extract
      let trimmedString = message && message.substr(0, maxLength); //trim the string to the maximum length
      //re-trim if we are in the middle of a word
      return trimmedString && trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    }

    render() {
      const { job } = this.props;

      const styles = {
        list: {
          listStyle: 'none',
          padding: 0
        },
        listItem: {
          paddingRight: 10
        },
        h3: {
          fontSize: 20
        },
        row: {
          marginTop: 20,
          borderTop: '1px solid #dfe1e4'
        }
      }

      return (
        <Row style={styles.row} className="clearfix">
          <Col xs={10} md={10}>
            <Row className="clearfix">
              <Col className="clearfix">
                <h3 style={styles.h3}>
                  <Link to={`/jobs/${job.slug}`}>{job.title}</Link>
                </h3>
                <p>
                  <span></span>
                  <span>{this.teaser(job.description)}...</span>
                </p>
                <div className="info">
                  <ul style={styles.list}>
                    <li style={styles.listItem} className='pull-left'><i className="fa fa-building"></i> Plecco Technologies, Inc.</li>
                    <li style={styles.listItem} className='pull-left'><i className="fa fa-location-arrow"></i> {this.address(job)}</li>
                    <li style={styles.listItem} className='pull-left'><i className="fa fa-calendar"></i> {moment(job.created_at).fromNow()}</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={2} className="hidden-xs" style={{padding: '20px 0 0 10px'}}>
            <Link to={`/jobs/${job.slug}`} className="btn btn-default pull-right">View</Link>
          </Col>
        </Row>
      );
    }
}

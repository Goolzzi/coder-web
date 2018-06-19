import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import JobRow from './JobRow';

export default class JobList extends Component {

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
        return (
          <Row className="clearfix" style={{margin: 20}}>
            { this.props.jobs.length === 0 ?
              <Col>
                <div className="clearfix">
                    <div className="main_div post clearfix">
                        <div className="col-lg-12 jobs clearfix">
                            <div className="main_div clearfix">
                                <p>No jobs found.</p>
                            </div>
                        </div>
                    </div>
                </div>
              </Col>
              :
              this.props.jobs.map((job, index) =>
                <Col className="clearfix" key={index}>
                  <JobRow job={job} />
                </Col>
              )
            }
          </Row>
        );
    }
}

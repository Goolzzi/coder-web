import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const DISPLAY_NUMBER = 5;

const styles = {
    jobList: {
      padding: 0,
      paddingBottom: 500,
      listStyle: 'none',
    },
    job: {
      paddingBottom: 15,
      title: {
        fontSize: '1.2em',
      },
      detailItem: {
        display: 'inline-block',
        minWidth: '50',
      },
    },
    details: {
      paddingLeft: 0,
      paddingBottom: 15,
      listStyle: 'none',
    },
    description: {
      whiteSpace: 'pre-wrap',
    }
}

export default class SimilarPositions extends Component {

  getRandom = (arr, n) => {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
  }

  render() {
    const { jobs, address } = this.props;
    return (
      <div className="clearfix">
        <h3>Similar Positions</h3>
        <ul style={styles.jobList}>
          { this.getRandom(jobs, DISPLAY_NUMBER).map((job, i) =>
            <li key={i} style={styles.job} className='pull-left'>
              <h4 style={styles.job.title}><Link to={`/jobs/${job.slug}`}>{job.title}</Link></h4>
              <ul style={styles.details}>
                { job.company_name &&
                  <li style={styles.job.detailItem}><i className="fa fa-building"></i> Plecco Technologies, Inc.</li>
                }
                <li style={styles.job.detailItem}><i className="fa fa-location-arrow"></i> {address(job)}</li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

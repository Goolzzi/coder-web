import React, {Component} from 'react';
import _ from 'lodash';
import Header from './Header';
import Sidebar from './Sidebar';

const styles = {
  title: {
    margin: '15px 0 20px',
    fontWeight: 700,
    color: '#39b54a',
    fontSize: 24,
    borderBottom: '1px solid #8da3aa',
    paddingBottom: 15
  },
  icon: {
    color: '#39b54a'
  },
  iconsList: {
    padding: 0
  },
  icons: {
    paddingRight: 10
  },
  description: {
    whiteSpace: 'pre-wrap',
    fontSize: 14,
    color: '#8290a2',
    lineHeight: 1.5
  },
  container: {
    paddingTop: 20
  }
}

export default class Job extends Component {

  componentWillMount() {
    this.setJob();
  }

	componentWillReceiveProps = () => {
    this.setJob();
	}

  setJob = () => {
    this.setState({
      job: this.findJobBySlug()
    });
  }

  trim(message, maxLength) {
    if (message.length > maxLength) {
      let trimmedString = message && message.substr(0, maxLength); //trim the string to the maximum length
      //re-trim if we are in the middle of a word
      trimmedString = trimmedString
        .substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
      trimmedString += '...'
      return trimmedString;
    }
    return message;
  }

  findJobBySlug() {
    let slug = this.props.slug;
    let jobs = this.props.jobs;
    let job = _.find(jobs, {slug})
    return job;
  }

  address(job) {
    if (!job.city)
      return job.state;
    else
      return job.city && job.city + ', ' + job.state;
  }

  loader() {
    // $(document).ready(function(){
    // $("#loader").hide();
    // });
    // jQuery(document).ready(function () {
    //     jQuery('.post').addClass("hidden").viewportChecker({
    //         classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
    //         offset: 100
    //     });
    // });
  }

  render() {
    const { job } = this.state;
    const { jobs } = this.props;
    return (
      <div className="container">
        <Header job={job} trim={this.trim} address={this.address} />
    		<div className="row" style={styles.container}>
    			<div className="col-md-9">
            <div className="content">
      				<h1 style={styles.title}>Job Description</h1>
    					<div style={styles.description}>{ job.description }</div>
    					<a className="btn btn-primary btn_apply">Apply now</a>
            </div>
    			</div>
    			<div className="col-md-3">
            <Sidebar jobs={jobs} address={this.address} />
    			</div>
    		</div>
      </div>
    )
  }
}

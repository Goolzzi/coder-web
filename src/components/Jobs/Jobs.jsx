import React, {Component} from 'react';
import Search from '../Search';
import { Switch, Route } from 'react-router-dom';
import { Job, NewJobForm, JobListContainer } from '.';
import JobService from '../../lib/services/job.service';
import Utils from '../../lib/utils';

export default class Jobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
          jobsLoaded: false,
          keywords: '',
          location: ''
        }
    }

    componentWillMount() {
      this.search(this.props.match.keywords, this.props.match.location)
    }

    jobList = () => {
      JobService.getJobs()
        .then((response) => {
          this.setState({ jobs: response.data.jobs, jobsLoaded: true, totalJobs: response.data.total });
        })
        .catch((error) => {
          console.log(error);
        })
    }

    search = (keywords, location) => {
      keywords = keywords || ''
      location = location || ''
      JobService.searchJobs(keywords, location)
        .then((response) => {
          this.setState({ jobs: response.data.jobs, jobsLoaded: true, totalJobs: response.data.total });
          this.props.history.push(Utils.getSearchUrl(keywords, location))
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render() {
      return (
        <div id="Jobs">
          { this.state.jobsLoaded &&
            <div style={{background: '#fff'}}>
              <Search search={this.search} {...this.state} />
              <Switch>
                <Route exact path='/jobs' render={() => (
                  <JobListContainer {...this.props} {...this.state}/>
                )}/>
                <Route exact path='/jobs/new' render={() => (
                  <NewJobForm {...this.props} {...this.state}/>
                )}/>
                <Route exact path='/jobs/:slug' render={({match}) => (
                  <Job {...this.props} {...this.state} slug={match.params.slug}/>
                )}/>
              </Switch>
            </div>
          }
        </div>
      )
    }
}

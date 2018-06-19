import React, {Component} from 'react';
import JobForm from './JobForm'

export default class NewJobForm extends Component {
    render() {
        return (
            <div id='NewJobForm' className="container">
                <div className="row mrl_4">
                    <div className="billing_container new_job_bg">
                        <h1 className="billing_title">Create Your job Posting</h1>
                        <p>Get Limited access to our resume database and social recuiting platform with the purchase of one job post!</p>
                        <hr/>
                        <h3>Required Fields</h3>
                        <p className="left">Get Limited access to our resume database and social recuiting platform with the purchase of one job post!</p>
                        <div className="spacer_50"></div>
                        <h2>Job Postings</h2>
                        <JobForm/>
                    </div>
                </div>
            </div>
        )
    }
}

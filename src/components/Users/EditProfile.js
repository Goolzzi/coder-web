import React, { Component } from 'react';
import '../../styles/bootstrap-combined.min.css'
import '../../styles/animate.css'
import '../../styles/font-awesome.css'
import '../../styles/RalewayFontcss.css'
import '../../styles/custom.css'
import '../../styles/bootstrap.min.css'
import '../../styles/tab.css'
// import back_to from '../../images/back_to.png'
// import quick_loader from '../../images/quirky-loader.gif'

const styles = {
  designation: {
    float: 'left',
    width: 100,
    margin: '0 0 7px',
    fontWeight: 700,
    color: '#39b54a',
    fontSize: 24,
    padding: 0,
  },
  searchArea: {
    width: '100%',
    float: 'left',
    padding: '20px 0 10px',
    backgroundColor: '#f6f7f8',
    borderBottom: '1px solid #ccc',
  },
  profile: {
    padding: '30px 0 0',
  }
}

export default class EditProfile extends Component {
  constructor(props) {
      super(props)
      this.state = {
          keywords: '',
          location: ''
      }
  }

  handleChange = (event) => {
      let name = event.target.name;
      let value = event.target.value
      this.setState({[name]: value})
      console.log(this.state);
  }

  handleSubmit = (keywords, location) => {
      let url = this.props.getSearchUrl(keywords, location)
      this.props.route.history.push(url)
  }

  render() {
    // const { user, profile, employmentTypes, resume, skill, exp, education, jobs, job } = this.props
    if (false) {
      return null;
    } else {
      // console.log('user', user);
      return (
        <div style={styles.profile}>
        	<div className="container">
        		<div className="VTabbedPanels" id="tp1">
        			<ul className="TabbedPanelsTabGroup">
        				<li className="TabbedPanelsTab TabbedPanelsTabSelected">Profiles</li>
        				<li className="TabbedPanelsTab">Jobs</li>
        				<li className="TabbedPanelsTab">Alerts</li>
        				<li className="TabbedPanelsTab">Settings</li>
        			</ul>
        			<div className="TabbedPanelsContentGroup">
        				<div style={{display: 'block'}} className="TabbedPanelsContent TabbedPanelsContentVisible">
        					<div style={styles.searchArea}>
        						<div className="container">
        							<div className="row job_detail_ post">
        								<div className="col-lg-5">
        									<div style={styles.designation}>Profile</div>
        								</div>
        							</div>
        						</div>
        					</div>
        					<div className="tab_padd new_job_bg">
        						<h1 className="profile_hadd">
        							<span className="relative_top">Not Searchable (Editing):</span>
        							<a href="#" className="btn btn-primary btn_apply white_bg fl_right ml_5">Delete This Profile</a>
        							<a href="#" className="btn btn-primary btn_apply white_bg fl_right">Done</a>
        						</h1>
        						<div className="profile_detail post">
        							<div className="row">
        								<div className="col-lg-6">
        									<input type="text" className="mb_15" name="fName" id="fName"placeholder="First name" required/>
        								</div>
        								<div className="col-lg-6">
        									<input type="text" className="mb_15" name="fName" id="fName" placeholder="Last name" required/>
        								</div>
        								<div className="col-lg-4">
        									<input type="text" className="mb_15" name="fName" id="fName" placeholder="Email" required/>
        								</div>
        								<div className="col-lg-3">
        									<input type="text" className="mb_15" name="fName" id="fName" placeholder="Primary Phone" required/>
        								</div>
        								<div className="col-lg-3">
        									<input type="text" className="mb_15" name="fName" id="fName" placeholder="Zip" required/>
        								</div>
        								<div className="col-lg-2 width_33ip">
        									<div className="searchable">
        										<input type="checkbox" id="checkbox6" className="css-checkbox" />
        										<label htmlFor="checkbox6" className="css-label">Searchable</label>
        									</div>
        								</div>
        								<div className="col-lg-4">
        									<input type="text" name="fName" id="fName" placeholder="City" required/>
        								</div>
        								<div className="col-lg-4">
        									<input type="text" name="fName" id="fName" placeholder="State" required/>
        								</div>
        								<div className="col-lg-4">
        									<input type="text" name="fName" id="fName" placeholder="Country" required/>
        								</div>
        							</div>
        						</div>
        						<hr />
        						<div>
        							<div className="profile_detail post">
        								<div className="main_div">
        									<div className="input pt_10">Title</div>
        									<div className="col-lg-4">
        										<input type="text" className="mb_15" name="fName" id="fName" placeholder="Desired Position" required/>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">Type</div>
        									<div className="col-lg-4 select_field mb_15">
        										<select>
        											<option>Full-time</option>
        											<option>Contract</option>
        											<option>Part-Time</option>
        										</select>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">Pay Rate:</div>
        									<div className="col-lg-4">
        										<input type="text" className="mb_15" name="salary" id="salary" placeholder="Salary / Hourly Rate" required/>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">Resume</div>
        									<div className="col-lg-4">
        										<input type="file" className="mb_15" />
        	                  <button className="btn">Upload Resume</button>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input">Cover Letter</div>
        									<div className="col-lg-4">
        										<div className="input"><a href="#">Manage Cover Letters</a></div>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">Able to Relocate?</div>
        									<div className="col-lg-4">
        										<div className="searchable">
        											<input type="checkbox" className="css-checkbox" id="relocate" />
        											<label className="css-label" htmlFor="checkbox8">Yes</label>
        										</div>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">US Citizen?</div>
        									<div className="col-lg-4 mb_15">
        										<div className="searchable">
        											<input type="checkbox" className="css-checkbox" id="citizen" />
        											<label className="css-label" htmlFor="checkbox9">Yes</label>
        										</div>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">Security Clearance?</div>
        									<div className="col-lg-4 mb_15">
        										<div className="searchable">
        											<input type="checkbox" className="css-checkbox" id="clearance" />
        											<label className="css-label" htmlFor="checkbox9">Yes</label>
        										</div>
        									</div>
        								</div>
        								<div className="main_div">
        									<div className="input pt_10">Military Veteran?</div>
        									<div className="col-lg-4 mb_15">
        										<div className="searchable">
        											<input type="checkbox" className="css-checkbox" id="veteran" />
        											<label className="css-label" htmlFor="checkbox9">Yes</label>
        										</div>
        									</div>
        								</div>
        							</div>
        							<h2 className="profile_hadd">Skills</h2>
        							<div className="profile_detail post">
        								<div className="row">
        									<div className="col-lg-5">
        										<input type="text" className="mb_15" name="skill" id="skill" placeholder="Skill" required/>
        									</div>
        									<div className="col-lg-3">
        										<input type="text" placeholder="Yrs Exp." className="mb_15" />
        									</div>
        									<div className="col-lg-3">
        										<input type="text" placeholder="Last Used (YYYY)" className="mb_15" />
        									</div>
        									<div className="col-lg-1"><a className="btn_cancle"><i className="fa fa-close"></i></a></div>
        								</div>
        								<a className="btn btn-primary btn_apply white_bg">Add</a>
        							</div>
        							<h2 className="profile_hadd">Work Experience</h2>
        							<div className="profile_detail post">
        								<div className="row">
        									<div className="col-lg-6">
        										<input type="text" placeholder="Job Title" className="mb_15" />
        									</div>
        									<div className="col-lg-5">
        										<input type="text" placeholder="Company" name="exp.company" className="mb_15" />
        									</div>
        									<div className="col-lg-1"><a className="btn_cancle"><i className="fa fa-close"></i></a></div>
        									<div className="col-lg-2 width_33ip">
        										<input type="text" placeholder="Start Date" name="exp.start_date" className="mb_15" />
        									</div>
        									<div className="col-lg-2 width_33ip">
        										<input type="text" placeholder="End Date" name="exp.end_date" className="mb_15" />
        									</div>
        									<div className="col-lg-2 width_33ip">
        										<div className="searchable">
        											<input type="checkbox" id="checkbox7" className="css-checkbox" />
        											<label htmlFor="checkbox7" className="css-label">Current</label>
        										</div>
        									</div>
        								</div>
        								<a className="btn btn-primary btn_apply white_bg">Add</a>
        							</div>
        							<h2 className="profile_hadd">Education</h2>
        							<div className="profile_detail post">
        								<div className="row">
        									<div className="select_field mb_15">
        										<select id="singleSelect" name="education.education_type"></select>
        									</div>
        									<div className="col-lg-3">
        										<input type="text" className="mb_15" placeholder="Institution" name="education.institution" />
        									</div>
        									<div className="col-lg-2 width_33ip">
        										<input type="text" className="mb_15" placeholder="City/ST" name="education.city_state" />
        									</div>
        									<div className="col-lg-2 mb_15 width_33ip">
        										<input type="text" placeholder="Country" name="education.country" />
        									</div>
        									<div className="col-lg-1"><a className="btn_cancle"><i className="fa fa-close"></i></a></div>
        								</div>
        								<a className="btn btn-primary btn_apply white_bg">Add</a>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div style={{display: "none"}} className="TabbedPanelsContent">
        				<div style={styles.searchArea}>
        					<div className="container">
        						<div className="row job_detail_ post hidden visible animated flipInX">
        							<div className="col-lg-5">
        								<div style={styles.designation}>Jobs</div>
        								<div className="post_detail">1 position</div>
        							</div>
        							<div className="col-lg-7">
        								<a href="#" className="btn_post">saved jobs</a>
        								<a href="#" className="btn_post">applied jobs</a>
        								<a href="#" className="btn_post">show expired jobs</a>
        							</div>
        						</div>
        					</div>
        				</div>
        				<div className="tab_padd jobs">
        					<div className="main_div post">
        						<div className="col-lg-10 jobs">
        							<div className="main_div">
        								<h2>PHP Developer</h2>
        								<p>Bicitis Group | Rockaway, NJ</p>
        							</div>
        						</div>
        						<div className="col-lg-2 pr_0">
        							<a href="#" className="btn btn-default">Remove</a>
        						</div>
        					</div>
        					<div className="supporter"></div>
        					<div className="main_div post">
        						<div className="col-lg-10 jobs">
        							<div className="main_div">
        								<h2>Senior Ruby On Rails Engineer</h2>
        								<p>Tenacious Staffing in New York, New York</p>
        							</div>
        						</div>
        						<div className="col-lg-2 pr_0">
        							<a href="#" className="btn btn-default">Remove</a>
        						</div>
        					</div>
        					<div className="supporter"></div><div className="main_div post">
        					<div className="col-lg-10 jobs">
        						<div className="main_div">
        							<h2>PHP Developer</h2>
        							<p>Bicitis Group | Rockaway, NJ</p>
        						</div>
        					</div>
        					<div className="col-lg-2 pr_0">
        						<a href="#" className="btn btn-default">Remove</a>
        					</div>
        				</div>
        				<div className="supporter"></div>
        				<div className="main_div post">
        					<div className="col-lg-10 jobs">
        						<div className="main_div">
        							<h2>Senior Ruby On Rails Engineer</h2>
        							<p>Tenacious Staffing in New York, New York</p>
        						</div>
        					</div>
        					<div className="col-lg-2 pr_0">
        						<a href="#" className="btn btn-default">Remove</a>
        					</div>
        				</div>
        				<div className="supporter"></div>
        			</div>
        		</div>
        		<div style={{display: "none"}} className="TabbedPanelsContent">
        			<div style={styles.searchArea}>
        				<div className="container">
        					<div className="row job_detail_ post hidden visible animated flipInX">
        						<div className="col-lg-5">
        							<div style={styles.designation}>Job Alerts</div>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="tab_padd recent_job">
        				<div className="scrobl_div post">
        					<table className="table">
        						<thead>
        							<tr>
        								<th className="bdl_radius" width="30%">Alert Title</th>
        								<th width="20%">Date Updated</th>
        								<th width="20%">Notification</th>
        								<th width="30%" className="bdr_radius">Action</th>
        							</tr>
        						</thead>
        						<tbody>
        							<tr className="bd_none">
        								<td><b>Job Alert Title</b></td>
        								<td><i className="fa fa-calendar"></i>&nbsp;04-05-2016</td>
        								<td>
        									<i className="fa fa-envelope-o"></i>&nbsp;
        									<div className="btn-group">
        										<button type="button" className="btn notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        											daily
        											<span className="caret"></span>
        										</button>
        										<ul className="dropdown-menu">
        											<li><a href="#">Weekly</a></li>
        											<li><a href="#">Never</a></li>
        										</ul>
        									</div>
        								</td>
        								<td><a className="btn_status ml_5" href="#">Delete</a><a className="btn_status" href="#">Rename</a></td>
        							</tr>
        							<tr>
        								<td><b>Job Alert Title</b></td>
        								<td><i className="fa fa-calendar"></i>&nbsp;04-05-2016</td>
        								<td>
        									<i className="fa fa-envelope-o"></i>&nbsp;
        									<div className="btn-group">
        										<button type="button" className="btn notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        											daily
        											<span className="caret"></span>
        										</button>
        										<ul className="dropdown-menu">
        											<li><a href="#">Weekly</a></li>
        											<li><a href="#">Never</a></li>
        										</ul>
        									</div>
        								</td>
        								<td><a className="btn_status ml_5" href="#">Delete</a><a className="btn_status" href="#">Rename</a></td>
        							</tr>
        							<tr>
        								<td><b>Job Alert Title</b></td>
        								<td><i className="fa fa-calendar"></i>&nbsp;04-05-2016</td>
        								<td>
        									<i className="fa fa-envelope-o"></i>&nbsp;
        									<div className="btn-group">
        										<button type="button" className="btn notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        											daily
        											<span className="caret"></span>
        										</button>
        										<ul className="dropdown-menu">
        											<li><a href="#">Weekly</a></li>
        											<li><a href="#">Never</a></li>
        										</ul>
        									</div>
        								</td>
        								<td><a className="btn_status ml_5" href="#">Delete</a><a className="btn_status" href="#">Rename</a></td>
        							</tr>
        							<tr>
        								<td><b>Job Alert Title</b></td>
        								<td><i className="fa fa-calendar"></i>&nbsp;04-05-2016</td>
        								<td>
        									<i className="fa fa-envelope-o"></i>&nbsp;
        									<div className="btn-group">
        										<button type="button" className="btn notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        											daily
        											<span className="caret"></span>
        										</button>
        										<ul className="dropdown-menu">
        											<li><a href="#">Weekly</a></li>
        											<li><a href="#">Never</a></li>
        										</ul>
        									</div>
        								</td>
        								<td><a className="btn_status ml_5" href="#">Delete</a><a className="btn_status" href="#">Rename</a></td>
        							</tr>
        						</tbody></table>
        					</div>
        				</div>
        			</div>
        			<div style={{display: "none"}} className="TabbedPanelsContent">
        				<div style={styles.searchArea}>
        					<div className="container">
        						<div className="row job_detail_ post hidden visible animated flipInX">
        							<div className="col-lg-5">
        								<div style={styles.designation}>Account Settings</div>
        							</div>
        						</div>
        					</div>
        				</div>
        				<div className="tab_padd job_detail_">
        					<h2 className="profile_hadd">Cover Letters</h2>
        					<div className="profile_detail post">
        						<p><a className="btn btn-primary btn_apply white_bg" href="#">Add Cover Letter</a></p>
        					</div>
        					<h2 className="profile_hadd">Password</h2>
        					<div className="profile_detail post">
        						<a className="btn btn-primary btn_apply white_bg" href="#">Change Password</a>
        					</div>
        					<h2 className="profile_hadd">Email Notifications</h2>
        					<div className="profile_detail post">
        						<div className="blank_data">
        							<input type="checkbox" className="css-checkbox" id="checkbox1" />
        							<label className="css-label" htmlFor="checkbox1">{"Subscribe to the QuirkyCoders Advisor: QuirkyCoders' free weekly newsletter, to receive tech news and career advice."}</label>
                    </div>
        						<div className="blank_data">
        							<input type="checkbox" className="css-checkbox" id="checkbox2" />
        							<label className="css-label" htmlFor="checkbox2">{"Subscribe to the QuirkyCoders Report: QuirkyCoders' free monthly newsletter on trends in the tech job market, skills and salaries."} </label>
        						</div>
        						<div className="blank_data">
        							<input type="checkbox" className="css-checkbox" id="checkbox3" />
        							<label className="css-label" htmlFor="checkbox3">Subscribe to QuirkyCoders Member Communications: Announcents about new QuirkyCoders features, member surveys and promotions.</label>
        						</div>
        						<div className="blank_data">
        							<input type="checkbox" className="css-checkbox" id="checkbox4" />
        							<label className="css-label" htmlFor="checkbox4">Subscribe to QuirkyCoders Updates: QuirkyCoders will send custom emails about your resume, job alerts and recommended QuirkyCoders services.</label>
        						</div>
        						<div className="blank_data mb_0">
        							<input type="checkbox" className="css-checkbox" id="checkbox5" />
        							<label className="css-label" htmlFor="checkbox5">Subscribe to receive special offers from select QuirkyCoders partners.</label>
        						</div>
        					</div>
        					<h2 className="profile_hadd">Work Authorization</h2>
        					<div className="profile_detail post">
        						<div className="select_field mb_0">
        							<select>
        								<option>US Citizen</option>
        								<option>US Citizen 1</option>
        								<option>US Citizen 2</option>
        							</select>
        						</div>
        					</div>
        					<h2 className="profile_hadd">Personal Information</h2>
        					<div className="profile_detail post">
        						<p>Providing this information is strictly voluntary - you will not be penalized or subjected to adverse treatment if you choose not to provide this information. If you choose not to provide this information, simply select "Decline to Designate".</p>
        						<div className="select_field">
        							<select>
        								<option>Ethnicity</option>
        								<option>Ethnicity 1</option>
        								<option>Ethnicity 2</option>
        							</select>
        						</div>
        						<div className="select_field">
        							<select>
        								<option>Gender</option>
        								<option>Gender 1</option>
        								<option>Gender 2</option>
        							</select>
        						</div>
        						<div className="select_field mb_0">
        							<select>
        								<option>Veteran Status</option>
        								<option>Veteran Status 1</option>
        								<option>Veteran Status 2</option>
        							</select>
        						</div>
        					</div>
        					<h2 className="profile_hadd">Email</h2>
        					<div className="profile_detail post">
        						abcd@whymail.com &nbsp;<a className="btn btn-primary btn_apply white_bg" href="#">Change Email</a>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
      );
    }
  }
}

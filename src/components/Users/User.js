import React, { Component } from 'react';
import '../../styles/bootstrap-combined.min.css'
import '../../styles/animate.css'
import '../../styles/font-awesome.css'
import '../../styles/RalewayFontcss.css'
import '../../styles/custom.css'
import '../../styles/bootstrap.min.css'
// import back_to from '../../images/back_to.png'
// import quick_loader from '../../images/quirky-loader.gif'
import Search from '../Search'
import { Link } from 'react-router-dom'

const styles = {
  designation: {
    width: '100%',
    float: 'left',
    margin: '0 0 7px',
    fontFamily: 'Raleway',
    fontWeight: 700,
    color: '#39b54a',
    fontSize: 24,
    padding: 0,
  },
  postDetail: {
    width: '100%',
    float: 'left',
    padding: '0 0 10px',
    fontSize: 14,
    fontFamily: 'Raleway',
    color: '#8290a2',
    fontWeight: 500,
  },
  searchArea: {
    width: '100%',
    float: 'left',
    padding: '20px 0 10px',
    backgroundColor: '#f6f7f8',
    borderBottom: '1px solid #ccc',
  },
  profileHadd: {
    width: '100%',
    float: 'left',
    margin: '15px 0 20px',
    fontWeight: 700,
    color: '#39b54a',
    fontFamily: 'Raleway',
    fontSize: 24,
    borderBottom: '1px solid #8da3aa',
    paddingBottom: 15,
  }
}

export default class User extends Component {
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
    const { user, profile, employmentTypes, resume, skill, exp, education, jobs, job } = this.props
    if (!user) {
      return null;
    } else {
      return (
        <div>
          <Search search={this.handleSubmit} keywords={this.state.keywords} location={this.state.location} />
          <div className="main_div pt_b0">
              <div className="container">
                  <div className="VTabbedPanels" id="tp1">
                     <ul className="TabbedPanelsTabGroup">
                        <li className="TabbedPanelsTab TabbedPanelsTabSelected">Profiles</li>
                        <li className="TabbedPanelsTab">Jobs</li>
                        <li className="TabbedPanelsTab">Alerts</li>
                        <li className="TabbedPanelsTab">Settings</li>
                    </ul>
                    <div className="TabbedPanelsContentGroup">
                        <div style={{display: "block"}} className="TabbedPanelsContent TabbedPanelsContentVisible">
                          <div style={styles.searchArea}>
                              <div className="container">
                                  <div className="row post visible animated flipInX">
                                      <div className="col-lg-12">
                                          <div style={styles.designation}>Profile</div>
                                          <div style={styles.postDetail}>Not Searchable (Last Edited: 04/05/2016)</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab_padd job_detail_">
                              <h2 style={styles.profileHadd}>{user.fname} {user.lname}<span className="edit_btn"><Link to={`/users/${user.id}/edit`}>Edit Profile</Link></span></h2>
                              <div className="profile_detail post">
                                  <div className="row">
                                      <div className="col-lg-3">
                                          <label><i className="fa fa-phone"></i>  {user.phone_primary}</label>
                                      </div>
                                      <div className="col-lg-3">
                                          <label><i className="fa fa-envelope-o"></i>  {user.email}</label>
                                      </div>
                                      <div className="col-lg-3">
                                          <label><i className="fa fa-location-arrow"></i>  {user.city}, {user.country} {user.zip}</label>
                                      </div>
                                      <div className="col-lg-3 minheight_30">
                                          <input type="checkbox" className="css-checkbox" id="checkbox1" />
                                          <label className="css-label">Searchable</label>
                                      </div>
                                  </div>
                              </div>
                              <h2 style={styles.profileHadd}>{profile && profile.title}</h2>
                              <div className="profile_detail post">
                                  <div className="main_div"><label className="width_auto">{ employmentTypes && employmentTypes.join(', ') }</label></div>
                                  <div className="main_div"><label className="width_auto">{"Relocate?"}</label> { profile && profile.relocate ? 'Yes' : 'No' }</div>
                                  <div className="main_div"><label className="width_auto">{"US Citizen?"}</label> { profile && profile.us_citizen ? 'Yes' : 'No' }</div>
                                  <div className="main_div"><label className="width_auto">{"Military Veteran?"}</label> { profile && profile.veteran ? 'Yes' : 'No' }</div>
                                  <div className="main_div"><label className="width_auto">{"Security Clearance?"}</label> { profile && profile.security_clearance ? 'Yes' : 'No' }</div>
                                  <div className="main_div"><label className="width_auto">Pay Rate:</label> { profile && profile.salary }</div>
                                  <div className="main_div">
                                      <label>Resume:</label>
                                      <div className="input"><a href="#"><i className="fa fa-plus-circle"></i> { resume && resume.attachment.url }</a></div>
                                      <div className="input"><a href="#"><i className="fa fa-plus-circle"></i> Add a resume</a></div>
                                      <div className="input"><a href="#"><i className="fa fa-plus-circle"></i> {}</a></div>
                                      <p>Cached Values</p>
                                  </div>
                                  <div className="main_div">
                                      <label>Cover Letter<span>:</span></label>
                                      <div className="input"><a href="#">Manage Cover Letters</a></div>
                                  </div>
                              </div>
                              <h2 style={styles.profileHadd}>Skills</h2>
                              <div className="profile_detail post">
                                  <div className="col-lg-6">
                                      <div className="row">
                                          <div className="col-lg-3">{skill && skill.name}</div>
                                          <div className="col-lg-3">{skill && skill.years_experience} Years</div>
                                          <div className="col-lg-3">{skill && skill.last_used}</div>
                                      </div>
                                  </div>
                                  <p className="mb_0">
                                      <a className="btn btn-primary btn_apply white_bg" href="#/jobseekers/editprofile">Add skill</a>
                                  </p>
                              </div>
                              <h2 style={styles.profileHadd}>Work Experience </h2>
                              <div className="profile_detail post">
                                  <div className="col-lg-12">
                                      <div className="row">
                                          <div className="col-lg-3">{exp && exp.title}</div>
                                          <div className="col-lg-3">{exp && exp.company}</div>
                                          <div className="col-lg-3">{exp && exp.start_date}</div>
                                          <div className="col-lg-3">{exp && exp.end_date}</div>
                                      </div>
                                  </div>
                                  <p className="mb_0">
                                      <a className="btn btn-primary btn_apply white_bg" href="#/jobseekers/editprofile">Add work experience</a>
                                  </p>
                              </div>
                              <h2 style={styles.profileHadd}>Education </h2>
                              <div className="profile_detail post">
                                  <div className="col-lg-12">
                                      <div className="row">
                                          <div className="col-lg-3">{education && education.education_type}</div>
                                          <div className="col-lg-3">{education && education.institution}</div>
                                          <div className="col-lg-3">{education && education.city_state}</div>
                                          <div className="col-lg-3">{education && education.country}</div>
                                      </div>
                                  </div>
                                  <p className="mb_0">
                                      <a className="btn btn-primary btn_apply white_bg" href="#/jobseekers/editprofile">Add education</a>
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div style={{display: "none"}} className="TabbedPanelsContent">
                          <div style={styles.searchArea}>
                              <div className="container">
                                  <div className="row job_detail_ post hidden visible animated flipInX">
                                      <div className="col-lg-5">
                                          <div style={styles.designation}>Jobs</div>
                                          <div style={styles.postDetail}>{ jobs && jobs.length } { jobs && jobs.length === 1 ? 'position' : 'positions' }</div>
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
                                  <div>
                                      <div className="col-lg-10 jobs">
                                          <div className="main_div">
                                              <h1>{ job && job.title }</h1>
                                              <p>Company Name | { job && job.city }, { job && job.state }</p>
                                          </div>
                                      </div>
                                      <div className="col-lg-2 pr_0">
                                          <a className="btn btn-default">Remove</a>
                                      </div>
                                      <div className="supporter"></div>
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
                                      <div style={styles.designation}>Job Alerts</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="tab_padd recent_job">
                          <div className="scrobl_div post">
                              <table cellSpacing="0" cellPadding="0" className="table">
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
                              <h2 style={styles.profileHadd}>Cover Letters</h2>
                              <div className="profile_detail post">
                                  <p><a className="btn btn-primary btn_apply white_bg" href="#">Add Cover Letter</a></p>
                              </div>
                              <h2 style={styles.profileHadd}>Password</h2>
                              <div className="profile_detail post">
                                  <a className="btn btn-primary btn_apply white_bg" href="#">Change Password</a>
                              </div>
                              <h2 style={styles.profileHadd}>Email Notifications</h2>
                              <div className="profile_detail post">
                                  <p className="blank_data">
                                      <input type="checkbox" className="css-checkbox" id="checkbox1" />
                                      <label className="css-label">Subscribe to the Dice Advisor: Dice's free weekly newsletter, to receive tech news and career advice. </label>
                                  </p>
                                  <p className="blank_data">
                                      <input type="checkbox" className="css-checkbox" id="checkbox2" />
                                      <label className="css-label">Subscribe to the Dice Report: Dice's free monthly newsletter on trends in the tech job market, skills and salaries. </label>
                                  </p>
                                  <p className="blank_data">
                                      <input type="checkbox" className="css-checkbox" id="checkbox3" />
                                      <label className="css-label">Subscribe to Dice Member Communications: Announcents about new Dice features, member surveys and promotions. </label>
                                  </p>
                                  <p className="blank_data">
                                      <input type="checkbox" className="css-checkbox" id="checkbox4" />
                                      <label className="css-label">Subscribe to MyDice Updates: Dice will send custom emails about your resume, job alerts and recommended Dice services. </label>
                                  </p>
                                  <p className="blank_data mb_0">
                                      <input type="checkbox" className="css-checkbox" id="checkbox5" />
                                      <label className="css-label">Subscribe to receive special offers from select Dice partners. </label>
                                  </p>
                              </div>
                              <h2 style={styles.profileHadd}>Work Authorization</h2>
                              <div className="profile_detail post">
                                  <div className="select_field mb_0">
                                      <select>
                                          <option>US Citizen </option>
                                          <option>US Citizen 1</option>
                                          <option>US Citizen 2</option>
                                      </select>
                                  </div>
                              </div>
                              <h2 style={styles.profileHadd}>Personal Information</h2>
                              <div className="profile_detail post">
                                  <p>Providing this information is strictly voluntary - you will not be penalized or subjected to adverse treatment if you choose not to provide this information. If you choose not to provide this information, simply select "Decline to Designate".</p>
                                  <div className="select_field">
                                      <select>
                                          <option>Ethnicity </option>
                                          <option>Ethnicity 1</option>
                                          <option>Ethnicity 2</option>
                                      </select>
                                  </div>
                                  <div className="select_field">
                                      <select>
                                          <option>Gender </option>
                                          <option>Gender 1</option>
                                          <option>Gender 2</option>
                                      </select>
                                  </div>
                                  <div className="select_field mb_0">
                                      <select>
                                          <option>Veteran Status </option>
                                          <option>Veteran Status 1</option>
                                          <option>Veteran Status 2</option>
                                      </select>
                                  </div>
                              </div>
                              <h2 style={styles.profileHadd}>Email</h2>
                              <div className="profile_detail post">
                                  abcd@whymail.com &nbsp;<a className="btn btn-primary btn_apply white_bg" href="#">Change Email</a>
                              </div>
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

import React, {Component} from 'react';

export default class JobForm extends Component {
    render() {
        return (
          <form name="jobpostForm">
              <div className="main_div">
                  <div className="frm_caption">Job Title</div>
                  <div className="form-group">
                      <input type="text" className="form-control" name="title" id="title"  required/>
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
                  <div className="frm_caption">Job Keywords</div>
                  <div className="form-group small">
                      <input type="text" className="form-control small" name="keywords" id="keywords"  required/>
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="main_div mdm">
                  <div className="frm_caption">Job Description</div>
                  <div style={{width: '1000px' }} className="form-group textarea">
                      <textarea></textarea>
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="spacer_40"></div>
              <h2>Application Method</h2>
              <div className="main_div">
                  <div className="frm_caption">Apply to email</div>
                  <div className="form-group">
                      <input type="email" className="form-control" name="apply_email" id="apply_email" required/>
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
                  <div className="frm_caption">Apply to URL</div>
                  <div className="form-group small">
                      <input type="text" className="form-control small" name="apply_url" id="apply_url"  required/>
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="spacer_40"></div>
              <h2>LOcation</h2>
              <div className="main_div">
                  <div className="frm_caption">Job City</div>
                  <div className="form-group">
                      <input type="text" name="city" id="city"  />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
                  <div className="frm_caption">Job State</div>
                  <div className="form-group small">
                      <input type="text" className="form-control small" required name="state" id="state" />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="main_div mdm">
                  <div className="frm_caption">Job Country</div>
                  <div className="form-group">
                      <input type="text" className="form-control full" name="country" required id="country" />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
                  <div className="frm_caption">Job Area Code</div>
                  <div className="form-group small width_238">
                      <input type="text" className="form-control small" name="area_code" id="area_code" required />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="main_div">
                  <div className="frm_caption">Job Postal Code</div>
                  <div className="form-group">
                      <input type="text" name="zipcode" id="zipcode" required className="form-control" />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="spacer_40"></div>
              <h2>Categorization</h2>
              <div className="main_div">
                  <div className="frm_caption">Position Type</div>
                  <div className="select_field">
                      <select style={{ background: 'initial' }} name="position_type" id="position_type" required multiple="multiple">
                          <option>Full Time
                          </option>
                          <option>Part Time</option>
                          <option>Third Party</option>
                      </select>
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
                  <div className="frm_caption">Job Pay Rate</div>
                  <div className="form-group small">
                      <input type="text" className="form-control small" name="pay_rate" id="pay_rate" required />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="main_div">
                  <div className="frm_caption">Job Length</div>
                  <div className="form-group">
                      <input type="text" className="form-control" name="job_length" id="job_length" required />
                      <div className="alert alert-danger">
                          Please enter valid value.
                      </div>
                  </div>
              </div>
              <div className="main_div">
                  <div className="frm_caption display_nm">&nbsp;</div>
                  <div className="job_type">
                      <input type="checkbox" className="form-control css-checkbox " id="checkbox1" />
                      <label className="css-label">Telecommuting Position</label>
                  </div>
                  <div className="job_type">
                      <input type="checkbox" className="form-control css-checkbox" id="checkbox2" />
                      <label className="css-label">Travel Required</label>
                  </div>
              </div>
              <div className="spacer_40"></div>
              <div className="main_div">
                  <div className="checkout_left">
                      <h2>Checkout</h2>
                      <div className="frm_caption">Number of Jobs</div>
                      <div className="select_field">
                          <select className="form-control" >
                              <option value='2'></option>
                          </select>
                      </div>
                  </div>
                  <div className="checkout_block">
                      <div className="total">
                          <span>Order Total:</span>
                          $20.00<br/>
                          <input type="hidden" value='200' />
                          <div className="spacer_40"></div>
                          <input className="btn btn-primary btn_apply" />
                          <input className="btn btn-primary btn_apply cancel" type="button" value="Cancel"/>
                          <p className="left">+Includes LIMITED access to our resume database!</p>
                      </div>
                  </div>
              </div>
              <div className="spacer_40"></div>
              <h2>Pricing Information</h2>
              <div className="main_div">
                  <div className="price_table">
                      <p >20 Jobs @ $30 each</p>
                  </div>
                  <div className="price_table big">
                      <p>
                          <strong>Need More Jobs?</strong>
                          &nbsp;
                          <a className="green_btn" href="#">Contact Us</a>
                      </p>
                  </div>
              </div>
              <div className="spacer_40"></div>
              <h2>Special Offer:</h2>
              <p className="left">Get Free Limited Access to QuirkyCoders's resume and social profile database with each job post!
                  <br/>
                  <span>( Access is restricted to 10 candidate profile views)</span>
              </p>
          </form>
        )
    }
}

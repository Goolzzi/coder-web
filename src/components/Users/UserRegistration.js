import React, {Component} from 'react';
import testimonial_img from '../../images/testimonial-img.png'
import captcha_img from '../../images/captcha-img.png'
import prev_img from '../../images/prev.png'
import next_img from '../../images/next.png'
import app_store_img from '../../images/app-store-btn.png'
import google_play_btn from '../../images/google-paly-btn.png'
import mobile_app_img from '../../images/mobile-app-img.png'

export default class UserRegistration extends Component {
    render() {
        return (
            <div>
                <div className="js_banner_bg">
                    <div className="container">
                        <div className="row">
                            <div className="js_banner_left">
                                <h1>Register on QuirkyCoders and search thousands of programming jobs</h1>
                                <div className="process post">
                                    <div className="application_icon register"></div>
                                    <div className="process_text">
                                        <h2>Register</h2>
                                        <p>Signing up is easy. QuirkyCoders is always free for coding professionals.</p>
                                    </div>
                                </div>
                                <div className="process post">
                                    <div className="application_icon profile"></div>
                                    <div className="process_text">
                                        <h2>Create a profile and upload your resume</h2>
                                        <p>Showcase your skills and let employers and recruiters find you.</p>
                                    </div>
                                </div>
                                <div className="process post">
                                    <div className="application_icon search"></div>
                                    <div className="process_text">
                                        <h2>Search and apply to thousands of tech jobs</h2>
                                        <p>Apply with just the touch of a button!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="js_banner_right">
                                <div className="right_tab">
                                    <ul>
                                        <li>
                                            <a href="#">Post a Job</a>
                                        </li>
                                        <li>
                                            <a href="#">Recruiting</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Sales</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="register_block post">
                                    <h1>Register to Search Jobs</h1>
                                    <form name="register" ng-submit="register.$valid && reg()" novalidate>
                                        <input type="text" name="fname" ng-model="user.fname" placeholder="First Name" required/>
                                        <div className="alert alert-danger" ng-show="submitted && register.fname.$invalid" role="alert">
                                            This field is required.
                                        </div>
                                        <div className="alert alert-danger" ng-show="!submitted && register.fname.$invalid && !register.fname.$pristine" role="alert">
                                            This field is required.
                                        </div>

                                        <input type="text" name="email" ng-model="user.email" placeholder="Email" required/>
                                        <div className="alert alert-danger" ng-show="submitted && register.email.$invalid" role="alert">
                                            This field is required.
                                        </div>
                                        <div className="alert alert-danger" ng-show="!submitted && register.email.$invalid && !register.email.$pristine" role="alert">
                                            This field is required.
                                        </div>

                                        <input type="password" name="password" ng-model="user.password" placeholder="New Password" required/>
                                        <div className="alert alert-danger" ng-show="submitted && register.password.$invalid" role="alert">
                                            This field is required.
                                        </div>
                                        <div className="alert alert-danger" ng-show="!submitted && register.password.$invalid && !register.password.$pristine" role="alert">
                                            This field is required.
                                        </div>

                                        <input type="password" name="cpassword" ng-model="user.cpassword" placeholder="Confirm Password" required/>
                                        <div className="alert alert-danger" ng-show="submitted && register.cpassword.$invalid" role="alert">
                                            This field is required.
                                        </div>
                                        <div className="alert alert-danger" ng-show="!submitted && register.cpassword.$invalid && !register.cpassword.$pristine" role="alert">
                                            This field is required.
                                        </div>

                                        <span className="suggestion">8 character minimum with at least 1 number and 1 letter.
                                        </span>
                                        <div className="captcha_img"><img src={captcha_img} alt=""/></div>
                                        <input type="submit" className="btn_start" ng-click="submitted=true" value="Start Searching"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blue_green_bg">
                    <div className="container">
                        <div className="hire_block">
                            <h1 className="post">{"Looking to hire ?"}</h1>
                            <p>Browse our resume database and learn about our
                                <br/>Open Web social recruiting tools.</p>
                        </div>
                        <div className="btn_block">
                            <a href="#">Post a Job</a>
                            <a href="#">Employer Login</a>
                            <a href="#">Contact sales</a>
                        </div>
                    </div>
                </div>
                <div className="grey_bg">
                    <div className="container">
                        <div className="one_third ml_0 post">
                            <div className="application_icon notifi"></div>
                            <h3>Get Notified</h3>
                            <p>Sign up for job alerts and get the newest job postings you want delivered right to your email.</p>
                        </div>
                        <div className="one_third post">
                            <div className="application_icon found"></div>
                            <h3>Get Found</h3>
                            <p>Employers and recruiters use QuirkyCoders to find candidates like you. Make your resume searchable and allow recruiters to contact you. Your job search just got easier!</p>
                        </div>
                        <div className="one_third mr_0 post">
                            <div className="application_icon hired"></div>
                            <h3>Get Hired</h3>
                            <p>QuirkyCoders connects the best tech talent with jobs around the world. Whether you're a developer, engineer, or QA tester, QuirkyCoders has what you need to keep your career on track.</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial_bg_">
                    <div className="container">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src={{
                                        testimonial_img
                                    }} alt="" width="130" height="130" className="post"/>
                                    <div className="testimonial_qote">Etiam pretium quam sed lectus mollis, sed element cursus. Phasellus vitae mollis sem. Mauris vestibu ac placerat mollis, Fully Recommonded !....</div>
                                    <div className="testimonial_name">
                                        <h2>Cole Rowden</h2>
                                        <p>Firewall Engineer (www.testdemo.com)</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={{
                                        testimonial_img
                                    }} alt="" width="130" height="130" className="post"/>
                                    <div className="testimonial_qote">Etiam pretium quam sed lectus mollis, sed element cursus. Phasellus vitae mollis sem. Mauris vestibu ac placerat mollis, Fully Recommonded !....</div>
                                    <div className="testimonial_name">
                                        <h2>Cole Rowden</h2>
                                        <p>Firewall Engineer (www.testdemo.com)</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={{
                                        testimonial_img
                                    }} alt="" width="130" height="130" className="post"/>
                                    <div className="testimonial_qote">Etiam pretium quam sed lectus mollis, sed element cursus. Phasellus vitae mollis sem. Mauris vestibu ac placerat mollis, Fully Recommonded !....</div>
                                    <div className="testimonial_name">
                                        <h2>Cole Rowden</h2>
                                        <p>Firewall Engineer (www.testdemo.com)</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control left" href="#myCarousel" data-slide="prev"><img src={prev_img} alt=""/></a>
                            <a className="carousel-control right" href="#myCarousel" data-slide="next"><img src={next_img} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="mobile_app_bg">
                    <div className="container">
                        <div className="mobile_app_left">
                            <h1>Get the QuirkyCoders Mobile App</h1>
                            <p>Get the edge you need to find and apply for the right technology jobs fast. Browse thousands of open positions: Java, project manager, business analyst, . net, SAP, start-ups, systems administrator, DBA, Hadoop, SQL, programming, VMware, software engineer, Ruby, and so many more.</p>
                            <p>{"Browse thousands of tech jobs. Apply with a few taps. It's seriously that fast."}</p>
                            <div className="app_btn post">
                                <a href="#"><img src={app_store_img} alt=""/></a>
                                &nbsp; &nbsp;
                                <a href="#"><img src={google_play_btn} alt=""/></a>
                            </div>
                        </div>
                        <div className="mobile_app_right">
                            <img src={mobile_app_img} className="post" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="download_block_bg">
                    <div className="container">
                        <h1>{"Want a link to download? We'll email you one."}</h1>
                        <div className="main_div">
                            <input type="text" className="download_input" placeholder="your email address"/>
                            <a href="#" className="btn_submit">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

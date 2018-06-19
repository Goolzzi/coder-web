import React, {Component} from 'react';
import loginLogo from '../../images/login-logo.png'
import { Link } from 'react-router-dom'
import signupBackground from '../../images/signup-bg.jpg'

export default class SignUp extends Component {

    constructor(props) {
      super(props)
      this.state = {
        email: ''
      }
    }

    componentWillMount = () => {
        const userToken = localStorage.getItem('qcUserToken')
        if (userToken) {
          this.props.route.history.push('/jobs')
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signIn(this.state.email, this.state.password)
    }

    handleChange = (event) => {
      let name = event.target.name;
      let value = event.target.value
      this.setState({ [name]: value })
    }

    render() {
        const styles = {
          container: {
            width: 1020,
            margin: '0 auto'
          },

          logo: {
            width: 238,
            margin: '62px auto 100px',
            padding: 0
          },

          login: {
            width: 515,
            padding: '85px 80px',
            float: 'left',
            backgroundColor: '#fff',
            h1: {
              width: '100%',
              float: 'left',
              margin: '0 0 10px',
              padding: 0,
              fontSize: 28,
              color: '#39b54a',
              fontWeight: 400
            },
            formControl: {
              borderColor: '#8290a2',
              height: 45,
              color: '#8290a2',
              marginBottom: 10
            },
            p: {
              width: '100%',
              float: 'left',
              margin: 0,
              padding:0,
              color: '#8290a2',
              fontSize: 14
            },
            btn: {
              width: '100%',
              float: 'left',
              margin: '0 0 10px',
              backgroundColor: '#39b54a',
              color: '#fff',
              padding: '12px 0',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 700,
              borderRadius: 4,
              WebkitTransition: 'all .2s ease-in-out',
              OTransition: 'all .2s ease-in-out',
              transition: 'all .2s ease-in-out'
            }
          },

          signup: {
            width: 505,
            padding: '120px 65px',
            float: 'left',
            background: `url(${signupBackground}) top left repeat-y #39b54a`,
            marginTop: 30,
            h1: {
              width: '100%',
              float: 'left',
              margin: 0,
              padding: 0,
              color: '#fff',
              fontSize: 28,
              fontWeight: 400
            },
            p: {
              width: '100%',
              float: 'left',
              margin: '20px 0',
              padding: 0,
              color: '#fff',
              fontSize: 14,
              fontWeight: 400
            }
          }
        }

        return (
            <div className="login_container clearfix" style={styles.container} >
                <div className="login_logo" style={styles.logo}>
                    <a href="/"><img src={loginLogo} alt=""/></a>
                </div>
                <div className="login_main clearfix" style={styles.login}>
                    <h1 style={styles.login.h1}>Sign in</h1>
                    <form name="usersignin" onSubmit={this.handleSubmit}>
                        <input type="email" value={this.state.email} onChange={this.handleChange} style={styles.login.formControl} className="form-control" name="email" placeholder="Email" required />
                        <input type="password" onChange={this.handleChange} style={styles.login.formControl} className="form-control" name="password" placeholder="Password" required />
                        <input type="submit" style={styles.login.btn} className="btn_signin" value="Sign In"/>
                    </form>
                    <p style={styles.login.p}>Forgot your password?</p>
                    <h3>OR</h3>
                    <Link className="social_btn" to="#">Linkedin</Link>
                    <Link className="social_btn google" to="#">Google Mail</Link>
                </div>
                <div className="signup_main" style={styles.signup}>
                    <h1 style={styles.signup.h1}>Sign up</h1>
                    <p style={styles.signup.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <Link className="btn_signup_" to="/register">Sign Up</Link>
                </div>
            </div>
        )
    }
}

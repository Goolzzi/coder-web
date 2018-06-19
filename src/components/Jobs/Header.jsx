import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'

const styles = {
  icon: {
    color: '#39b54a'
  },
  iconsList: {
    padding: 0,
    listStyle: 'none',
  },
  icons: {
    paddingRight: 20,
    float: 'left',
  },
  details: {
    fontSize: 14,
    color: '#8290a2',
    fontWeight: 500
  },
  title: {
    fontWeight: 700,
    color: '#39b54a',
    fontSize: 24,
    paddingRight: 10,
    paddingBottom: 10
  },
  container: {
    background: '#f6f7f8',
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },
  button: {
    width: 'auto',
    border: '1px solid #8290a2',
    borderRadius: 4,
    color: '#8290a2',
    background: '#fff',
    fontSize: 14,
    padding: '15px 13px 14px',
    fontWeight: 400,
    textAlign: 'center',
    transition: 'all .2s ease-in-out',
    display: 'inline',
    marginRight: 10
  },
  buttonPrimary: {
    background: '#0071bc'
  }
}

export default class Header extends Component {
  render() {
    const { job } = this.props;
    console.log(this.props)
    return (
      <div style={styles.container}>
        <div className="row">
          <div className="col-md-6">
            <div style={styles.title}>
              <div style={{display: 'inline', marginRight: 20}}>{ this.props.trim(job.title, 120) }</div>
              { /* TODO: Check for permissions.*/
                true && <Link to={`/employers/editjob/${job.id}`}>
                  <i style={styles.icon} className="fa fa-pencil"></i>
                </Link>
              }
            </div>
            <div style={styles.details}>
              <JobIcons {...job} address={this.props.address}/>
            </div>
          </div>
          <div className="col-md-6 text-right pull-right">
            <button type="button" className="btn_post" style={styles.button}>Save</button>
            <button type="button" style={styles.button}>Remove</button>
            <button type="button" style={styles.button}>Email</button>
            <button type="button" style={styles.button} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Share <span className="caret"></span>
            </button>
            <button type="button" style={{...styles.button, ...styles.buttonPrimary}}>Apply now</button>
          </div>
        </div>
      </div>
    )
  }
}

const JobIcons = (props) =>
  <div>
     <ul style={styles.iconsList}>
      { props.company_name &&
        <li style={styles.icons}><i className="fa fa-building"></i> { props.company_name }</li>
      }
      { props.keywords &&
        <li style={styles.icons}><i className="fa fa-wrench"></i> { props.keywords }</li>
      }
      { props.position_type &&
        <li style={styles.icons}><i className="fa fa-calendar"></i> { props.position_type }</li>
      }
      { props.pay_rate &&
        <li style={styles.icons}><i className="fa fa-money"></i> { props.pay_rate }</li>
      }
      { props.telecommuting_position &&
        <li style={styles.icons}><i className="fa fa-desktop"></i> { props.telecommuting_position }</li>
      }
      { props.travel &&
        <li style={styles.icons}><i className="fa fa-plane"></i> { props.travel }</li>
      }
      <li style={styles.icons}>
        <i className="fa fa-location-arrow" alt="address"/> { props.address(props) }
      </li>
      <li style={styles.icons}>
        <i className="fa fa-calendar" alt="calendar"/> Posted <span>{moment(props.created_at).fromNow()}</span>
      </li>
    </ul>
  </div>

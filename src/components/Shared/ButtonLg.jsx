import React from 'react';

const styles = {
  greenBtn: {
    width: 130,
    display: 'table',
    margin: '0 auto',
    whiteSpace: 'nowrap',
    borderRadius: 50,
    border: '2px solid #0071bc',
    color: '#0071bc',
    fontSize: 15,
    fontWeight: 700,
    padding: '15px 0',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    boxShadow: '1px 6px 10px 2px #d6d6d6',
    position: 'absolute',
    bottom: 45,
    left: '50%',
    transform: 'translateX(-50%)',
  },
}

const ButtonLg = (props) => (
  <a href={props.link} style={styles.greenBtn}>{props.linkTitle}</a>
)

export default ButtonLg;

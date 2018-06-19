import React from 'react';
import Radium from 'radium';
import quoteBg from '../../images/quote-bg.jpg';

const styles = {
  quote: {
    borderBottom: '1px solid #9cdaa5',
    background: `url(${quoteBg}) bottom center no-repeat #39b54a`,
    paddingBottom: 90,
    width: '82%',
    margin: 'auto',
    h2: {
      color: '#fff',
      margin: 'auto auto 10',
      fontSize: 20,
      fontWeight: 700,
    },
    headLiner: {
      margin: '100px 0 35px',
      color: '#fff',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 30,
      textAlign: 'center'
    },
    position: {
      color: '#fff',
      margin: 'auto'
    },
  },
}

const Quote = (props) => (
  <div className="quote" style={styles.quote}>
    <h2 style={styles.quote.headLiner}>{props.message}</h2>
    <h2 className="text-center" style={styles.quote.h2}>{props.name}</h2>
    <p className="text-center" style={styles.quote.position}>{props.position}<br/>{props.company}</p>
  </div>
)

export default Radium(Quote);

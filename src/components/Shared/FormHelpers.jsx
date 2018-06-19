import React from 'react';

const styles = {
  input: {
    height: 46,
    width: '100%',
    marginBottom: 10,
    submitBtn: {
      fontWeight: 'bold',
      background: '#0071BA',
    }
  },
}

const TextBox = (props) => (
  <input
    style={styles.input}
    type={props.type}
    value={props.value}
    className="form-control"
    name={props.name}
    placeholder={props.placeholder}
    onChange={props.handleChange}
  />
)

const Button = (props) => (
    <input
      style={{width: '100%'}}
      type={props.type}
      value={props.value}
      onClick={props.handleSubmit}
      className="btn btn-lg btn-primary"
    />
)

const Input = (props) => {
  switch(props.type) {
    case 'submit':
      return <Button {...props} />
    default:
      return <TextBox {...props} />
  }
}

export { Input, Button, TextBox };

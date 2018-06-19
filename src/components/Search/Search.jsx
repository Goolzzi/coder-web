import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { TextBox, Button } from '../Shared/FormHelpers';

const styles = {
  container: {
    padding: '20px 0',
    backgroundColor: '#f6f7f8',
    borderBottom: '#dfe1e4'
  },
  input: {
    height: 47,
    marginBottom: 9,
    width: '100%'
  }
}

class Search extends Component {

  componentWillMount() {
    this.setState({
      keywords: this.props.keywords,
      location: this.props.location
    })
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.state.keywords, this.state.location)
  }

  render() {
    return (
      <div style={styles.container} className="search">
        <Grid>
          <Row>
            <Col md={12}>
              <form name="searchForm" onSubmit={this.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <TextBox type="text" value={this.state.keywords} className="form-control" name="keywords" placeholder="Job title, keywords or company name" handleChange={this.handleChange}/>
                  </Col>
                  <Col md={3}>
                    <TextBox type="text" value={this.state.location} className="form-control" name="location" placeholder="City or State" handleChange={this.handleChange}/>
                  </Col>
                  <Col md={3}>
                    <Button type="submit" value="Search" className="btn btn-lg btn-primary" handleSubmit={this.handleSubmit}/>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Search;

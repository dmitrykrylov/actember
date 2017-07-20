import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { Header, Input, Button, Form, Grid, Segment } from 'semantic-ui-react';
import { push } from 'react-router-redux';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const creds = { username, password };
    this.props.login(creds);
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Grid >
        <Grid.Row verticalAlign='middle' centered>
          <Grid.Column width={6}>
          
            <Header size="huge">Log In</Header>
            <form onSubmit={this.handleSubmit}>
              <Form>
              <Form.Field>
                <label>Username</label>
                <Input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
              </Form.Field>
                <Button onClick={() => { this.props.push('/register'); }}>Register</Button>
                <Button primary type="submit">Login</Button>
              </Form>
            </form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


export default connect(() => ({}), { login, push })(App);

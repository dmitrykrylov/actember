import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { reduxForm } from 'redux-form';
import { Header, Grid } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import LoginForm, { validate } from '../components/LoginForm';


const Form = reduxForm({ form: 'login', validate })(LoginForm);


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <Grid verticalAlign="middle" centered style={{ height: '100%' }}>
        <Grid.Column width={6} style={{ maxWidth: 450 }}>
          <Header size="huge">Log In</Header>
          <Form onSubmit={this.props.login} />
        </Grid.Column>
      </Grid>
    );
  }
}


export default connect(() => ({}), { login, push })(App);

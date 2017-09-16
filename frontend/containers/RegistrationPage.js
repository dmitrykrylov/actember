import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { reduxForm } from 'redux-form';
import { Header, Grid } from 'semantic-ui-react';
import RegistrationForm, { validate } from '../components/RegistrationForm';


const Form = reduxForm({ form: 'registration', validate })(RegistrationForm);


class App extends React.Component {
  render() {
    const { isAuthenticated, login } = this.props;

    return (
      <Grid verticalAlign="middle" centered style={{ height: '100%' }}>
        <Grid.Column width={6}>
          <Header size="huge">Register</Header>
          <Form onSubmit={login} />
        </Grid.Column>
      </Grid>
    );
  }
}


export default connect(() => ({}), { login })(App);
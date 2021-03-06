import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Header, Grid } from 'semantic-ui-react';
import { actions } from '../ducks/auth';
import LoginForm, { validate } from '../components/LoginForm';
import { withRouter } from 'react-router-dom';


const Form = reduxForm({ form: 'login', validate })(LoginForm);


class LoginPage extends React.Component {
  render() {
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


export default withRouter(connect(() => ({}), { ...actions })(LoginPage));

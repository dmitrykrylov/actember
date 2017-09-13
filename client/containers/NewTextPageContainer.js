import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { addText } from '../actions/texts';
import { reduxForm } from 'redux-form';
import NewTextForm from '../components/NewTextForm';


const Form = reduxForm({ form: 'newText' })(NewTextForm);


class NewTextPageContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Form onSubmit={this.props.addText} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


NewTextPageContainer.propTypes = {};


export default connect(() => ({}), { addText })(NewTextPageContainer);

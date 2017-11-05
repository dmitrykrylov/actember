import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { actions } from '../ducks/texts';
import NewTextForm, { validate } from '../components/NewTextForm';


const Form = reduxForm({ form: 'newText', validate })(NewTextForm);


class NewTextPageContainer extends React.Component {
  render() {
    return (
      <Grid verticalAlign="middle" centered>
        <Grid.Column computer={8} mobile={16}>
          <Header as="h2">Add New Text</Header>
          <Form errors={this.props.syncErrors} onSubmit={this.props.addText} />
        </Grid.Column>
      </Grid>
    );
  }
}


NewTextPageContainer.propTypes = {
  syncErrors: PropTypes.object,
  addText: PropTypes.func,
};


const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addText: actions.addText,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTextPageContainer);

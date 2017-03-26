import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NewTextPage from '../components/pages/NewTextPage';
import { addText } from '../actions';


class NewTextPageContainer extends React.Component {

  render() {
    return (
      <NewTextPage {...this.props}/>
    );
  }
}


NewTextPageContainer.propTypes = {};


export default connect(() => ({}), {addText})(NewTextPageContainer);
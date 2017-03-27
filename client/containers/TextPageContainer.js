import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchText } from '../actions';


class TextPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchText(this.props.match.params.id);
  }

  render() {
    console.log(this.props.text)

    const { text } = this.props

    return (
        <div>
        { 
          text &&
          <div>
            <h4>{text.title}</h4>
            <div>{text.original}</div>
          </div>
        }
        </div>
    );
  }
}


function mapStateToProps(state) {
  const { texts } = state;
  const { text } = texts;

  return {
    text,
  };
}


export default connect(mapStateToProps, { fetchText })(TextPageContainer);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchTextList } from '../actions';


class TextListPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchTextList();
  }

  render() {
    const texts = this.props.textList.map((text, i) => (
      <div key={i} className="box">{text.title}</div>
    ));

    return (
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-content">Filters</div>
          </div>
        </div>
        <div className="column is-8">
          <div>{texts}</div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { textList } = state.texts;
  return {
    textList
  }
}


export default connect(mapStateToProps, {fetchTextList})(TextListPageContainer);
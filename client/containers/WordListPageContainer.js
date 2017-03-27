import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWordList } from '../actions';


class WordListPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchWordList();
  }

  render() {
    const words = this.props.wordList.map((word, i) => (
      <div key={i} className="box">
        <strong>{word.word.lemma}</strong> - <span>{word.word.description}</span>
      </div>
    ));

    return (
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-content">Filters</div>
          </div>
        </div>
        <div className="column is-8">
          <div>{words}</div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { wordList } = state.words;
  return {
    wordList,
  };
};


export default connect(mapStateToProps, { fetchWordList })(WordListPageContainer);

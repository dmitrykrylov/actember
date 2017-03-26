import React, { PropTypes } from 'react';


class WordList extends React.Component {

  render() {
    return (
      <div>Words</div>
    );
  }
}


const mapStateToProps = (state) => {
  const { wordList } = state.words;
  return {
    wordList
  }
}


export default WordList;
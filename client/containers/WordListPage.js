import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
// import { fetchWordList, updateWordStatus } from '../actions/words';
import WordList from './WordList';


class WordListPage extends React.Component {
  render() {
    return (
      <div>
        <Header as="h2">Words</Header>
        <WordList />
      </div>
    );
  }
}



export default WordListPage;

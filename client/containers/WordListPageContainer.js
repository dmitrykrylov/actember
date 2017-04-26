import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWordList } from '../actions';
import { Table } from 'semantic-ui-react'


class WordListPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchWordList();
  }

  render() {
    const words = this.props.wordList.map((word, i) => (
      <Table.Row>
         <Table.Cell>{word && word.lemma}</Table.Cell>
         <Table.Cell>{word && word.description}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Table basic="very">
        <Table.Header>
          <Table.Row>
             <Table.HeaderCell>Word</Table.HeaderCell>
             <Table.HeaderCell>Description</Table.HeaderCell>
           </Table.Row>
        </Table.Header>
        <Table.Body>
          {words}
        </Table.Body>
      </Table>
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

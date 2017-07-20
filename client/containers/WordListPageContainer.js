import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWordList } from '../actions/words';
import { Table, Grid, Radio } from 'semantic-ui-react'


class WordListPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchWordList();
  }

  render() {
    const words = this.props.wordList.map((word, index) => (
      <Table.Row key={index}>
        <Table.Cell><Radio name={`[${index}].status`} value={'NEW'} /></Table.Cell>
        <Table.Cell><Radio name={`[${index}].status`} value={'TO_STUDY'} /></Table.Cell>
        <Table.Cell><Radio name={`[${index}].status`} value={'KNOWN'} /></Table.Cell>
        <Table.Cell>{word && word.lemma}</Table.Cell>
        <Table.Cell>{word && word.description}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell><small>New</small></Table.HeaderCell>
                  <Table.HeaderCell><small>To study</small></Table.HeaderCell>
                  <Table.HeaderCell><small>Known</small></Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {words}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWordList, updateWordStatus } from '../actions/words';
import { Form, Table, Grid, Select } from 'semantic-ui-react';
import 'icheck/skins/all.css'; // or single skin css
import { Checkbox } from 'react-icheck';


class WordListPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.props.fetchWordList();
  }

  handleStatusChange(wordId, known) {
    this.props.updateWordStatus({ wordId, known });
  }

  render() {
    const words = this.props.wordList.map((item, index) => (
      <Table.Row key={index}>
        <Table.Cell textAlign="center">
          <Checkbox
            checked={item.known}
            onChange={(e, value) => this.handleStatusChange(item.id, value)}
            checkboxClass="icheckbox_square-green"
            increaseArea="20%"
          />
        </Table.Cell>
        <Table.Cell><strong>{item.word && item.word.lemma}</strong></Table.Cell>
        <Table.Cell>{item.word && item.word.description}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="center">Known</Table.HeaderCell>
                  <Table.HeaderCell>Word</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {words}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={4}>
            <Form>
              <Form.Field>
                <label>Show</label>
                <Select
                  defaultValue="null"
                  options={[
                    { text: 'All', value: 'null' },
                    { text: 'Unknown', value: 'uknown' },
                    { text: 'Known', value: 'known' },
                  ]}
                >
                </Select>
              </Form.Field>
              <Form.Field>
                <label>Sort By</label>
                <Select
                  defaultValue="null"
                  options={[
                    { text: 'Alphabet', value: 'null' },
                  ]}
                >
                </Select>
              </Form.Field>
            </Form>
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


export default connect(mapStateToProps, { fetchWordList, updateWordStatus })(WordListPageContainer);

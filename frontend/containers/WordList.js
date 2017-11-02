import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Select } from 'semantic-ui-react';
import { fetchWordList, updateWordStatus } from '../actions/words';
import WordList from '../components/WordList';


class WordListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.props.fetchWords ? this.props.fetchWords() : this.props.fetchWordList();
  }

  handleStatusChange(wordId, known) {
    this.props.updateWordStatus({ wordId, known });
  }

  render() {
    return (
      <Grid centered reversed="mobile vertically">
          <Grid.Column width={12}>
            <WordList items={this.props.wordList} onStatusChange={this.handleStatusChange} />
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
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
  const { wordList } = state.words;
  return { wordList };
};


export default connect(mapStateToProps, { fetchWordList, updateWordStatus })(WordListContainer);

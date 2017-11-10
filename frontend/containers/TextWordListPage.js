import React from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Select } from 'semantic-ui-react';
import { actions as wordActions } from '../ducks/words';
import { actions as textActions } from '../ducks/texts';
import WordList from '../components/WordList';
import { withRouter } from 'react-router-dom';


class WordListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleOrderingChange = this.handleOrderingChange.bind(this);

    this.state = {
      known: null,
      ordering: null,
    };
  }

  componentDidMount() {
    this.props.fetchWordList({ id: this.props.match.params.id });
  }

  handleStatusChange(id, known) {
    this.props.updateWordStatus({ id, known });
  }

  handleFilterChange(event, a) {
    this.setState({ known: a.value });
    this.props.fetchWordList({ known: a.value });
  }

  handleOrderingChange(event, a) {
    this.setState({ ordering: a.value });
    this.props.fetchWordList({ ordering: a.value });
  }

  render() {
    return (
      <Grid centered reversed="mobile vertically">
        <Grid.Column width={12}>
          <WordList fromText items={this.props.wordList} onStatusChange={this.handleStatusChange} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Form>
            <Form.Field>
              <label>Status</label>
              <Select
                defaultValue="null"
                onChange={this.handleFilterChange}
                options={[
                  { text: 'All', value: 'null' },
                  { text: 'Unknown', value: 'false' },
                  { text: 'Known', value: 'true' },
                ]}
              >
              </Select>
            </Form.Field>
            <Form.Field>
              <label>Sort By</label>
              <Select
                onChange={this.handleOrderingChange}
                placeholder="Choose ordering"
                options={[
                  { text: 'Alphabet A > Z', value: 'word__lemma' },
                  { text: 'Alphabet A < Z', value: '-word__lemma' },
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
  const { wordList } = state.texts;
  return { wordList };
};

const mapDispatchToProps = {
  updateWordStatus: wordActions.updateWordStatus,
  fetchWordList: textActions.fetchTextWordList,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WordListContainer));

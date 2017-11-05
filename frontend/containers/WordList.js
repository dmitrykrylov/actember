import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Select } from 'semantic-ui-react';
import { actions } from '../ducks/words';
import WordList from '../components/WordList';


class WordListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.state = {
      filter: null,
      sort: null,
    };
  }

  componentDidMount() {
    this.props.fetchWords ? this.props.fetchWords() : this.props.fetchWordList();
  }

  handleStatusChange(id, known) {
    this.props.updateWordStatus({ id, known });
  }

  handleFilterChange(event, a) {
    this.setState({ filter: a.value });
    this.props.fetchWords ? this.props.fetchWords({ filter: a.value }) : this.props.fetchWordList({ filter: a.value });
  }

  render() {
    console.log(this.state)
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
                onChange={this.handleFilterChange}
                options={[
                  { text: 'All', value: 'null' },
                  { text: 'Unknown', value: '-known' },
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


export default connect(mapStateToProps, { ...actions })(WordListContainer);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Popup, Menu, Container } from 'semantic-ui-react';
import { fetchText } from '../actions/texts';
import { fetchWord, fetchTextWords } from '../actions/words';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import WordListPage from './WordListPage';


class TextPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopupOpen = this.handlePopupOpen.bind(this);
    this.props.fetchText(this.props.match.params.id);

    this.state = { popupOpen: false };
  }

  handlePopupOpen(e, wordId) {
    if (!this.props.cachedWords[wordId]) {
      this.props.fetchWord(wordId);
    }
  }

  render() {
    const { text, cachedWords, match } = this.props;
    const activeTab = this.props.location.pathname.split('/')[3] === 'words' ? 1 : 0;

    if (!text.processed) { return <div />; }

    const tr = text.processed.strings.map((item, i) => {
      if (item.s === String.fromCharCode(10)) {
        return <br key={i} />
      } else if (item.id) {
        const string = <strong>{item.s}</strong>;
        const isWordFetched = cachedWords[item.id] !== undefined;

        return (
          <Popup
            key={i}
            trigger={string}
            position='bottom center'
            header={item.s}
            content={isWordFetched && cachedWords[item.id].description}
            onOpen={(e) => this.handlePopupOpen(e, item.id)}
          />
        );
      }
      return <span key={i}>{item.s}</span>;
    });

    return (
      <div>
          <Header as="h2">{text.title}</Header>
          <Menu secondary>
            <Link to={`/texts/${match.params.id}`}>
              <Menu.Item
                name="Read Text"
                active={activeTab === 0}
                onClick={this.handleItemClick}
                icon="book"
              />
            </Link>
            <Link to={`/texts/${match.params.id}/words`}>
              <Menu.Item
                name="Study Words"
                active={activeTab === 1}
                onClick={this.handleItemClick}
                icon="student"
              />
            </Link>
              <Menu.Item
                name="Delete Text"
                onClick={() => confirm('Are you sure?')}
                position="right"
                color="red"
                icon="delete"
                active
              />
          </Menu>
          <Switch>
            <Route exact path="/texts/:id" component={() => <Container text>{tr}</Container>} />
            <Route
              exact
              path="/texts/:id/words"
              component={() => (
                <WordListPage fetchWords={() => this.props.fetchTextWords(this.props.match.params.id)} />
              )}
            />
          </Switch>
      </div>
    );
  }
}


TextPageContainer.propTypes = {
  fetchText: PropTypes.func,
  cachedWords: PropTypes.object,
  match: PropTypes.object,
};


function mapStateToProps(state) {
  const { texts, words } = state;
  const { text } = texts;
  const { cachedWords } = words;

  return {
    text,
    cachedWords,
    words: texts.words,
  };
}


export default connect(mapStateToProps, { fetchText, fetchWord, fetchTextWords })(TextPageContainer);

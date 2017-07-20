import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Popup, Menu } from 'semantic-ui-react';
import { fetchText } from '../actions/texts';
import { fetchWord } from '../actions/words';


class TextPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopupOpen = this.handlePopupOpen.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchText(this.props.match.params.id);
  }

  handlePopupOpen(e, wordId) {
    if (!this.props.cachedWords[wordId]) {
      this.props.fetchWord(wordId);
    }
  }

  handleItemClick() {

  }

  render() {
    const { text } = this.props;
    
    if (!text.processed) { return <div />; }


    const tr = text.processed.strings.map((item, i) => {
      if (item.s === String.fromCharCode(10)) {
        return <br key={i} />
      } else if (item.id) {
        let string = <strong onMouseEnter={e => this.handlePopupOpen(e, item.id)} key={i}>{item.s}</strong>
        const isWordFetched = this.props.cachedWords[item.id] !== undefined;
        return (
          <Popup
            key={i}
            trigger={string}
            position='bottom center'
            header={item.s}
            content={isWordFetched && this.props.cachedWords[item.id].description}
          />
        );
      }
      return <span key={i}>{item.s}</span>
    });

    return (
      <div>
        <Header as='h2'>{text.title}</Header>
        <Menu secondary>
          <Menu.Item name='Read Text' active={true} onClick={this.handleItemClick} />
          <Menu.Item name='Study Words' active={false} onClick={this.handleItemClick} />
        </Menu>
        <div id="f">{tr}</div>
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
  };
}


export default connect(mapStateToProps, { fetchText, fetchWord })(TextPageContainer);

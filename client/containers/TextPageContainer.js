import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchText } from '../actions';


class TextPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchText(this.props.match.params.id);
  }

  render() {
    const { text } = this.props
    
    if (!text.processed) { return <div/> }

    const tr = text.processed.strings.map((item, i) => {
      if (item.s === String.fromCharCode(10)) {
        return <br key={i} />
      } else if (item.id) {
        return <strong onMouseEnter={(s) => console.log(item.id)} key={i}>{item.s}</strong>
      }
      return <span key={i}>{item.s}</span>
    })

    return (
      <div className="content">
        <div>
          <h2>{text.title}</h2>
          <div id="f">{tr}</div>
        </div>
      </div>
    );

  }

}


function mapStateToProps(state) {
  const { texts } = state;
  const { text } = texts;

  return {
    text,
  };
}


export default connect(mapStateToProps, { fetchText })(TextPageContainer);

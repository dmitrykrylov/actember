import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTextList } from '../actions/texts';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class TextListPageContainer extends React.Component {

  componentWillMount() {
    this.props.fetchTextList();
  }

  render() {
    const texts = this.props.textList.map((text, i) => (
      <Table.Row key={i}>
        <Table.Cell>
          <Link to={`/texts/${text.id}`}><strong>{text.title}</strong></Link>
        </Table.Cell>
        <Table.Cell textAlign="center">{text.words.length}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Table className="columns">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Total words</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {texts}
        </Table.Body>
      </Table>
    );
  }
}


const mapStateToProps = (state) => {
  const { textList } = state.texts;
  return {
    textList,
  };
};


export default connect(mapStateToProps, { fetchTextList })(TextListPageContainer);

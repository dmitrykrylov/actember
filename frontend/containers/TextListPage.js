import React from 'react';
import { connect } from 'react-redux';
import { Table, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { actions } from '../ducks/texts';


class TextListPageContainer extends React.Component {
  componentDidMount() {
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
      <Container text>
        <Header as="h2">Texts</Header>
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
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  const { textList } = state.texts;
  return {
    textList,
  };
};

const mapDispatchToProps = {
  fetchTextList: actions.fetchTextList,
};


export default connect(mapStateToProps, mapDispatchToProps)(TextListPageContainer);

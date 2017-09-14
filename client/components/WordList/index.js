import React, { PropTypes } from 'react';
import { Form, Table, Grid, Select } from 'semantic-ui-react';
import { Checkbox } from 'react-icheck';
import 'icheck/skins/all.css';


const WordList = (props) => {
  const words = props.items.map((item, index) => (
    <Table.Row key={index}>
      <Table.Cell textAlign="center">
        <Checkbox
          checked={item.known}
          onChange={(e, value) => props.onStatusChange(item.id, value)}
          checkboxClass="icheckbox_square-green"
          increaseArea="20%"
        />
      </Table.Cell>
      <Table.Cell><strong>{item.word && item.word.lemma}</strong></Table.Cell>
      <Table.Cell>{item.word && item.word.description}</Table.Cell>
      {props.hasTextData && <Table.Cell textAlign="center">{item.count}</Table.Cell>}
    </Table.Row>
  ));

  return (
    <Table basic="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Known</Table.HeaderCell>
          <Table.HeaderCell>Word</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          {props.hasTextData && <Table.HeaderCell>Count</Table.HeaderCell>}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {words}
      </Table.Body>
    </Table>
  );
};


export default WordList;

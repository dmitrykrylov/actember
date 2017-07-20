import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { push } from 'react-router-redux';

import TextListPageContainer from './TextListPageContainer';
import NewTextPageContainer from './NewTextPageContainer';
import WordListPageContainer from './WordListPageContainer';
import TextPageContainer from './TextPageContainer';
import LoginPageContainer from './LoginPageContainer';
import RegistrationPageContainer from './RegistrationPageContainer';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


const Nav = withRouter(({ history}) => (
  <Menu pointing secondary size="large">
    <Menu.Menu position="right">
      <Menu.Item name="texts" onClick={() => history.push('/texts')}>
        Texts
      </Menu.Item>
      <Menu.Item name="texts-new" onClick={() => history.push('/texts/new')}>
         New Text
      </Menu.Item>
      <Menu.Item name="words" onClick={() => history.push('/words')}>
        Words
      </Menu.Item>
      <Menu.Item name="login" onClick={() => history.push('/login')}>
        Logout
      </Menu.Item>
    </Menu.Menu>
  </Menu>
))


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <Nav />
        <Segment basic>
          <Container>
            <Route exact path="/" component={TextListPageContainer} />
            <Route path="/login" component={LoginPageContainer} />
            <Route exact path="/texts" component={TextListPageContainer} />
            <Route exact path="/texts/new" component={NewTextPageContainer} />
            <Route exact path="/texts/:id" component={TextPageContainer} />
            <Route exact path="/words" component={WordListPageContainer} />
            <Route exact path="/register" component={RegistrationPageContainer} />
          </Container>
        </Segment>
      </div>
    );
  }
}


App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};


function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
  };
}


export default connect(mapStateToProps)(App);


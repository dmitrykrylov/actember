import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { Segment, Menu, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import TextListPageContainer from './TextListPageContainer';
import NewTextPageContainer from './NewTextPageContainer';
import WordListPageContainer from './WordListPageContainer';
import TextPageContainer from './TextPageContainer';
import LoginPageContainer from './LoginPageContainer';
import RegistrationPageContainer from './RegistrationPageContainer';
import { logout } from '../actions/auth';
import '../styles/main.scss';


const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={(props) => authed ?
      <Component {...props} /> :
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
);


const Nav = withRouter(({ history, logout }) => (
  <Menu secondary inverted borderless size="large" color="violet">
    <Menu.Menu position="right">
      <Menu.Item name="texts" onClick={() => history.push("/texts")}>
        Texts
      </Menu.Item>
      <Menu.Item name="texts-new" onClick={() => history.push("/texts/new")}>
         New Text
      </Menu.Item>
      <Menu.Item name="words" onClick={() => history.push("/words")}>
        Words
      </Menu.Item>
      <Menu.Item name="login" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu.Menu>
  </Menu>
));


class App extends React.Component {
  render() {
    const { isAuthenticated, logout } = this.props;

    return (
      <div>
        <Switch>
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/register" component={RegistrationPageContainer} />
          <PrivateRoute
            authed={isAuthenticated}
            path="/"
            component={(() => (
              <div>
                <Nav logout={logout} />
                <Segment basic>
                  <Container>
                    <Switch>
                      <Route exact path="/" component={TextListPageContainer} />
                      <Route exact path="/texts" component={TextListPageContainer} />
                      <Route exact path="/texts/new" component={NewTextPageContainer} />
                      <Route exact path="/texts/:id" component={TextPageContainer} />
                      <Route exact path="/words" component={WordListPageContainer} />
                    </Switch>
                  </Container>
                </Segment>
              </div>
            ))}
          />
        </Switch>
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


export default connect(mapStateToProps, { logout })(App);


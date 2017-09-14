import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { Segment, Menu, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import TextListPage from './TextListPage';
import NewTextPage from './NewTextPage';
import WordListPage from './WordListPage';
import TextPage from './TextPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import { logout } from '../actions/auth';
import '../styles/main.scss';
// import logo from '../assets/logo.png';


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
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <PrivateRoute
            authed={isAuthenticated}
            path="/"
            component={(() => (
              <div>
                <Nav logout={logout} />
                <Segment basic>
                  <Container>
                    <Switch>
                      <Route exact path="/" component={TextListPage} />
                      <Route exact path="/texts" component={TextListPage} />
                      <Route exact path="/texts/new" component={NewTextPage} />
                      <Route path="/texts/:id" component={TextPage} />
                      <Route exact path="/words" component={WordListPage} />
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


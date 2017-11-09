import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { Responsive, Menu, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import TextListPage from './TextListPage';
import NewTextPage from './NewTextPage';
import WordListPage from './WordListPage';
import TextPage from './TextPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import { actions } from '../ducks/auth';
import '../styles/main.scss';


const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(window.localStorage.getItem('token'))
  return (
    <Route
      {...rest}
      render={props => window.localStorage.getItem('token') ?
        <Component {...props} /> :
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  );
};


const Nav = withRouter(({ history, logout }) => (
  <Menu secondary inverted borderless size="large" color="violet" stackable>
    <Container>
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
        <Menu.Item name="login" onClick={logout}>
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
));


class App extends React.Component {
  render() {
    const { logout } = this.props;

    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <PrivateRoute
          path="/"
          component={(() => (
            <div>
              <Nav logout={logout} />
              <Container>
                <Switch>
                  <Route exact path="/" component={TextListPage} />
                  <Route exact path="/texts" component={TextListPage} />
                  <Route exact path="/texts/new" component={NewTextPage} />
                  <Route path="/texts/:id" component={TextPage} />
                  <Route exact path="/words" component={WordListPage} />
                </Switch>
              </Container>
            </div>
          ))}
        />
      </Switch>
    );
  }
}


App.propTypes = {
  // isAuthenticated: PropTypes.bool.isRequired,
};


function mapStateToProps(state) {
  return {
    // isAuthenticated: !!state.auth.token,
  };
}


export default withRouter(connect(mapStateToProps, { logout: actions.logout })(App));


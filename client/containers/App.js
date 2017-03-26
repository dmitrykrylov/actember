import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

import TextListPageContainer from './TextListPageContainer';
import NewTextPageContainer from './NewTextPageContainer';
import WordListPageContainer from './WordListPageContainer';
import TextPageContainer from './TextPageContainer';
import LoginPageContainer from './LoginPageContainer';


import '../../node_modules/bulma/bulma.sass';


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
    <div>
      <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-right nav-menu">
          <Link to="/texts/" className="nav-item">Texts</Link>
          <Link to="/texts/new/" className="nav-item">New Text</Link>
          <Link to="/login/" className="nav-item">Logout</Link>
        </div>
        </div>
      </nav>
      <div className="container"> 
        <div className="column">
        <Switch>
          <Route exact path="/" component={TextListPageContainer} />
          <Route exact path="/login" component={LoginPageContainer} />
          <Route exact path="/texts" component={TextListPageContainer} />
          <Route exact path="/texts/new" component={NewTextPageContainer} />
          <Route exact path="/words" component={WordListPageContainer} />
          </Switch>
        </div>
      </div>
    </div>
    )
  }
}


App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}


function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    isAuthenticated,
  }
}


export default connect(mapStateToProps)(App)



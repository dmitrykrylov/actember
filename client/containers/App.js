import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
import {  Route } from 'react-router'
import {  push } from 'react-router-redux'

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
          <Link to="/texts" className="nav-item" onClick={() => store.dispatch(push('/texts'))}>Texts</Link>
          <Link to="/texts/new" className="nav-item" onClick={() => store.dispatch(push('/words'))}>New Text</Link>
          <Link to="/words" className="nav-item" onClick={() => store.dispatch(push('/words'))}>Words</Link>
          <Link to="/login" className="nav-item" onClick={() => store.dispatch(push('/login'))}>Logout</Link>
        </div>
        </div>
      </nav>
      <div className="container"> 
        <div className="column">

            <Route exact path="/" component={TextListPageContainer} />
            <Route path="/login" component={LoginPageContainer} />
            <Route exact path="/texts" component={TextListPageContainer} />
            <Route path="/texts/new" component={NewTextPageContainer} />
            <Route path="/words" component={WordListPageContainer} />
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



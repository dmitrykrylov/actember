import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state;
    const creds = { username, password }
    this.props.login(creds)
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Name" onChange={this.handleUsernameChange}/>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Password" onChange={this.handlePasswordChange}/>
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <button className="button is-primary">Login</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default connect(() => ({}), {login})(App)

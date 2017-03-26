import React from 'react';


export default class NewTextPage extends React.Component {

  constructor() {
    super()

    this.state = {
      title: '',
      original: ''
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleOriginalChange = (event) => {
    this.setState({ original: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, original } = this.state;
    this.props.addText({
      title,
      original
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="input" placeholder="Title"/>
                </div>
                <div className="field">
                  <label className="label">Content</label>
                  <textarea value={this.state.text} onChange={this.handleOriginalChange} className="textarea" placeholder="Content"/>
                </div>
                <div className="field">
                  <button type="submit" className="button">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
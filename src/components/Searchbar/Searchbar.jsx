import React, { Component } from 'react';
class Searchbar extends Component {
  state = { input: '' };
  handleChange = e => {
    this.setState({ input: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    const trimmed = input.trim();
    if (!trimmed) return;
    this.props.onSubmit(trimmed);
    this.setState({ input: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">Search</button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
import { Component } from 'react/cjs/react.production.min';

export default class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleImageSearch = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchImage.trim() === '') {
      alert('введите название изображения');
      return;
    }

    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            value={this.state.searchImage}
            placeholder="Search images and photos"
            onChange={this.handleImageSearch}
          />
        </form>
      </header>
    );
  }
}

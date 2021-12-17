import { Component } from 'react/cjs/react.production.min';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

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
      toast.error('Enter your search term');
      return;
    }

    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span class="button-label"></span>
          </button>

          <input
            className={s.SearchFormInput}
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

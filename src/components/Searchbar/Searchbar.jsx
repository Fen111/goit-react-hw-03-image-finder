import { Component } from 'react';
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
    const { searchImage } = this.state;

    if (searchImage.trim() === '') {
      toast.error('Enter your search term');
      return;
    }

    this.props.onSubmit(searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}></span>
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

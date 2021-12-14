// 23914400-19c57926caa45a402450638cc

import React, { Component } from 'react';
// import Loader from 'react-loader-spinner';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
// import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default class App extends Component {
  state = {
    arrImage: null,
    searchImage: '',
  };

  //   componentDidMount() {
  //     const key = '23914400-19c57926caa45a402450638cc';
  //     const page = 1;
  //     const perPage = 12;
  //     const category = this.state.searchImage;
  //     fetch(
  //       `https://pixabay.com/api/?q=${category}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  //     ).then(res => res.json().then(arrImage => this.setState({ arrImage })));
  //   }

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}>
          {/* <Button /> */}
        </Searchbar>
        <ImageGallery
          images={this.state.arrImage}
          searchImage={this.state.searchImage}
        />
        <Modal />
      </div>
    );
  }
}

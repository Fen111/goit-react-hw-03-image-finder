import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import imagesApi from 'resourses/imagesApi';
import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import LoaderContainer from 'components/LoaderContainer';

export default class App extends Component {
  state = {
    arrImages: [],
    searchImage: '',
    currentPage: 1,
    showModal: false,
    largeImageURL: '',
    imageAlt: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImage } = this.state;
    // this.setState({ isLoading: true });
    if (prevState.searchImage !== searchImage) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchImage, currentPage } = this.state;
    imagesApi(searchImage, currentPage).then(images => {
      if (images.length < 1) {
        toast.error('Image not found');
        return;
      }
      this.setState(prevState => ({
        arrImages: [...prevState.arrImages, ...images],
        currentPage: prevState.currentPage + 1,
      }));
      // .finally(() =>this.setState({ isLoading: false }))
    });
  };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClickOpenModal = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    e.preventDefault();

    this.setState({
      largeImageURL: e.target.dataset.img,
      showModal: true,
      imageAlt: e.target.alt,
    });
  };

  render() {
    const { arrImages, showModal, largeImageURL, tags, isLoading } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {isLoading && <LoaderContainer />}

        <ImageGallery images={arrImages} onClick={this.onClickOpenModal} />
        {arrImages.length > 0 && <Button onClick={this.fetchImages} />}

        {showModal && (
          <Modal onClose={this.toogleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

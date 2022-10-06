import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { Modal } from 'components/Modal/Modal';
import { serviceApi } from '../ServiceApi/Service';
import { Loader } from './Loader/Loader';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const App = () => {
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOnSearch = query => {
    if (query !== searchQuery) {
      setHits([]);
      setPage(1);
      setSearchQuery(query);
    }
  };

  const closeModal = e => {
    setModalOpen(!modalOpen);
    setModalContent('');
  };

  const handleModal = content => {
    setModalOpen(true);
    setModalContent(content);
  };

  const getPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchPhoto = async () => {
      setIsLoading(true);
      try {
        if (searchQuery !== '') {
          const data = await serviceApi(searchQuery, page);
          setHits(prev => [...prev, ...data]);
          if (data.length >= 12) {
            setIsShow(true);
          } else {
            setIsShow(false);
          }
        }
      } catch ({ error }) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhoto();
  }, [searchQuery, page]);

  return (
    <div>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <img src={modalContent} alt="" />
        </Modal>
      )}
      <Searchbar handleOnSearch={handleOnSearch} />
      <ImageGallery objectHits={hits} handleModal={handleModal} />
      {isLoading ? <Loader /> : isShow && <LoadMore onLoadMore={getPage} />}
    </div>
  );
};

App.propTypes = {
  fetchPhoto: PropTypes.func,
  handleOnSearch: PropTypes.func,
  closeModal: PropTypes.func,
  onEscKeyPress: PropTypes.func,
  handleModal: PropTypes.func,
  cards: PropTypes.bool,
  Searchbar: PropTypes.element,
  LoadMore: PropTypes.element,
  Loader: PropTypes.element,
};

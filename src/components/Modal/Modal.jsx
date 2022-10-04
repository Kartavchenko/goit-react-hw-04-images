import React from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useEffect } from 'react';

const overlay = document.getElementById('modal-root');

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);

    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  });

  const onCloseEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const onCloseClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={onCloseClickBackdrop}>
      <div className={css.modal}>{children}</div>
    </div>,
    overlay
  );
};

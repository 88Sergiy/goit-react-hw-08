import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalWindowContext = createContext({});

export function ModalProvider({ children }) {
  const [modals, setModals] = useState({});

  const handleModalOpen = (modalName, data = null) => {
    setModals(state => ({ ...state, [modalName]: { isOpen: true, data } }));
  };

  const handleModalClose = modalName => {
    setModals(state => ({
      ...state,
      [modalName]: { isOpen: false, data: null },
    }));
  };

  const isModalOpen = modalName => Boolean(modals[modalName]?.isOpen || false);

  const getModalData = modalName => modals[modalName]?.data || null;

  return (
    <ModalWindowContext.Provider
      value={{ isModalOpen, handleModalOpen, handleModalClose, getModalData }}
    >
      {children}
    </ModalWindowContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.element,
};
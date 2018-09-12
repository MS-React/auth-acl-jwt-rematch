import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const MsModal = ({
  modalIsOpen,
  modalTitle,
  modalBody,
  modalOnConfirmCallback,
  modalOnCancelCallback,
  modalConfirmButtonText,
  modalCancelButtonText,
}) => (
  <Modal isOpen={modalIsOpen} toggle={modalOnCancelCallback}>
    <ModalHeader toggle={modalOnCancelCallback}>
      {modalTitle}
    </ModalHeader>
    <ModalBody>
      {modalBody}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={modalOnConfirmCallback}>
        {modalConfirmButtonText}
      </Button>
      {' '}
      <Button color="secondary" onClick={modalOnCancelCallback}>
        {modalCancelButtonText}
      </Button>
    </ModalFooter>
  </Modal>
);

MsModal.propTypes = {
  modalConfirmButtonText: PropTypes.string.isRequired,
  modalCancelButtonText: PropTypes.string.isRequired,
  modalBody: PropTypes.any.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  modalOnConfirmCallback: PropTypes.func.isRequired,
  modalOnCancelCallback: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

export default MsModal;

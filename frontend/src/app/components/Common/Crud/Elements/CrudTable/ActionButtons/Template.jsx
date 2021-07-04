import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import CrudHOC from './Hoc';
import MsModal from '../../../../Modal/MsModal';

const BasicCrudModal = ({
  onAdd,
  onEdit,
  onDelete,
  isEditDisabled,
  modalIsOpen,
  modalTitle,
  modalBody,
  modalOnConfirmCallback,
  modalOnCancelCallback,
  modalConfirmButtonText,
  modalCancelButtonText,
}) => (
  <div className="action-buttons">
    <Button
      color="primary"
      onClick={onAdd}
    >
      Add
    </Button>
    <Button
      color="info"
      disabled={isEditDisabled}
      onClick={onEdit}
    >
      Edit
    </Button>
    <Button
      color="danger"
      disabled={isEditDisabled}
      onClick={onDelete}
    >
      Delete
    </Button>
    <MsModal
      modalIsOpen={modalIsOpen}
      modalTitle={modalTitle}
      modalBody={modalBody}
      modalOnConfirmCallback={modalOnConfirmCallback}
      modalOnCancelCallback={modalOnCancelCallback}
      modalConfirmButtonText={modalConfirmButtonText}
      modalCancelButtonText={modalCancelButtonText}
    />
  </div>
);

BasicCrudModal.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isEditDisabled: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
  modalConfirmButtonText: PropTypes.string.isRequired,
  modalCancelButtonText: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.any.isRequired,
  modalOnConfirmCallback: PropTypes.func.isRequired,
  modalOnCancelCallback: PropTypes.func.isRequired,
};

BasicCrudModal.defaultProps = {
  isEditDisabled: true,
  modalIsOpen: false,
};

export default (CrudHOC(BasicCrudModal));

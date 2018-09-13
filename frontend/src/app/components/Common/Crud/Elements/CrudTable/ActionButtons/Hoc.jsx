import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

const DEFAULT_USER_MODAL_LABELS = {
  confirmButtonText: 'Save',
};

const entityToFormFields = (formFields, entityItem) => {
  let valueFields = formFields;

  if (entityItem) {
    valueFields = JSON.parse(JSON.stringify(formFields));
    Object.keys(entityItem).forEach((field) => {
      valueFields[field].value = entityItem[field];
    });
  }

  return valueFields;
};

const formFieldsToEntity = (response) => {
  const entityValues = {};
  Object.keys(response).forEach((field) => {
    entityValues[field] = response[field].value;
  });
  return entityValues;
};

const CrudHOC = CrudComponent => (
  class CrudParent extends React.PureComponent {
    static propTypes = {
      form: PropTypes.any.isRequired,
      formFields: PropTypes.object.isRequired,
      selectedItem: PropTypes.object, // eslint-disable-line
      onConfirm: PropTypes.func.isRequired,
    };

    static defaultProps = {
      selectedItem: {},
    };

    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        actionType: null,
        errors: {},
        seletedItem: { ...props.selectedItem },
      };

      this.formRef = React.createRef();
    }

    componentWillReceiveProps({ selectedItem: newItem }) {
      if (!isEqual(this.props.selectedItem, newItem)) {
        this.setState({
          selectedItem: {
            ...newItem,
          },
        });
      }
    }

    onConfirmHandler = () => {
      const { actionType, selectedItem } = this.state;

      if (actionType === 'delete') {
        this.props.onConfirm(actionType, selectedItem);
        this.toggle();
      } else {
        this.formRef.current.triggerForm();
      }
    }

    onCancelHandler = () => {
      let entity = {};
      const { selectedItem: propItem } = this.props;

      if (this.isValidEntity(this.props.selectedItem) === true) {
        entity = propItem;
      }

      this.setState(prevState => ({
        selectedItem: { ...entity },
        errors: {},
        isModalOpen: !prevState.isModalOpen,
      }));
    }

    onSubmitForm = (response) => {
      if (response) {
        this.props.onConfirm(this.state.actionType, formFieldsToEntity(response));
        this.toggle();
      }
    };

    getModalBody = () => {
      const { errors, selectedItem } = this.state;
      const { form: FormComponent, formFields } = this.props;

      if (this.state.actionType === 'delete') {
        return (
          <p>
            {`Are you sure to delete this register?`}
          </p>
        );
      }

      return (
        <FormComponent
          fields={entityToFormFields(formFields, selectedItem)}
          errors={errors}
          onSubmit={this.onSubmitForm}
          ref={this.formRef}
        />
      );
    };

    getModalLabels = (actionType = 'add') => {
      if (actionType === 'delete') {
        return {
          ...DEFAULT_USER_MODAL_LABELS,
          confirmButtonText: 'Delete',
        };
      }

      return DEFAULT_USER_MODAL_LABELS;
    };

    toggleAddModal = () => {
      this.setState(prevState => ({
        actionType: 'add',
        selectedItem: {},
        isModalOpen: !prevState.isModalOpen,
      }));
    };

    toggleEditModal = () => {
      this.setState(prevState => ({
        actionType: 'edit',
        isModalOpen: !prevState.isModalOpen,
      }));
    };

    toggleDeleteModal = () => {
      this.setState(prevState => ({
        actionType: 'delete',
        isModalOpen: !prevState.isModalOpen,
      }));
    };

    toggle = () => {
      this.setState(prevState => ({
        isModalOpen: !prevState.isModalOpen,
      }));
    };

    isValidEntity = entity => entity ? Object.prototype.hasOwnProperty.call(entity, 'id') && entity.id !== '' : false;

    render() {
      const modalBody = this.getModalBody();
      const isEditDisabled = this.isValidEntity(this.state.selectedItem) === false;
      const modalInfo = {
        ...this.getModalLabels(this.state.actionType),
        title: `${this.state.actionType} User`,
      };

      return (
        <div className="action-buttons">
          <CrudComponent
            onAdd={this.toggleAddModal}
            onEdit={this.toggleEditModal}
            onDelete={this.toggleDeleteModal}
            isEditDisabled={isEditDisabled}
            modalIsOpen={this.state.isModalOpen}
            modalConfirmButtonText={modalInfo.confirmButtonText}
            modalCancelButtonText="Cancel"
            modalTitle={modalInfo.title}
            modalBody={modalBody}
            modalOnConfirmCallback={this.onConfirmHandler}
            modalOnCancelCallback={this.onCancelHandler}
          />
        </div>
      );
    }
  }
);

export default CrudHOC;

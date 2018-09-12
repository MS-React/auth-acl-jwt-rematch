import React from 'react';
import PropTypes from 'prop-types';

const CrudHOC = CrudComponent => (
  class CrudParent extends React.PureComponent {
    static propTypes = {
      form: PropTypes.any.isRequired,
      formFields: PropTypes.object.isRequired,
      selectedItem: PropTypes.object, // eslint-disable-line
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

    onConfirmHandler = () => {
      if (this.state.actionType === 'delete') {
        this.toggle();
      } else {
        this.formRef.current.triggerForm();
      }
    }

    onCancelHandler = () => {
      this.toggle();
    }

    onSubmitForm = (response) => {
      if (response) {
        console.log('response?', Object.keys(response));
        this.toggle();
      }
    };

    getModalBody = () => {
      const { errors } = this.state;
      const { form: FormComponent, formFields } = this.props;

      if (this.state.actionType === 'delete') {
        return (
          <p>
            {`Are you sure to delete User `}
          </p>
        );
      }

      return (
        <FormComponent
          fields={formFields}
          errors={errors}
          onSubmit={this.onSubmitForm}
          ref={this.formRef}
        />
      );
    };

    toggleAddModal = () => {
      this.setState({
        actionType: 'add',
      }, this.toggle);
    };

    toggleEditModal = () => {
      this.setState({
        actionType: 'edit',
      }, this.toggle);
    };

    toggleDeleteModal = () => {
      this.setState({
        actionType: 'delete',
      }, this.toggle);
    };

    toggle = () => {
      this.setState(prevState => ({
        isModalOpen: !prevState.isModalOpen,
      }));
    };

    render() {
      const modalBody = this.getModalBody();

      return (
        <div className="action-buttons">
          <CrudComponent
            onAdd={this.toggleAddModal}
            onEdit={this.toggleEditModal}
            onDelete={this.toggleDeleteModal}
            isEditDisabled={false}
            modalIsOpen={this.state.isModalOpen}
            modalConfirmButtonText="Save"
            modalCancelButtonText="Cancel"
            modalTitle="Modal Title"
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

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import MsModal from '../../../Common/Modal/MsModal';
import UsersForm, { fields } from '../../../Common/Form/Templates/CreateUser';

import './ActionButtons.scss';

const EMPTY_USER = {
  id: '',
  _id: '',
  name: '',
  email: '',
  password: '',
  rol: '',
  phone: '',
  skypeId: '',
};

const DEFAULT_USER_MODAL_LABELS = {
  confirmButtonText: 'Save',
};

export class ActionButtons extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
    onConfirm: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: EMPTY_USER,
  }

  constructor(props) {
    super(props);

    this.state = {
      actionType: null,
      user: { ...EMPTY_USER, ...props.user },
      isUserModalOpen: false,
      errors: {},
    };
    this.userForm = React.createRef();
  }

  componentWillReceiveProps({ user: newUser }) {
    const { user: currentSelectedUser } = this.props;

    if (!this.isUserMatchById(currentSelectedUser, newUser)) {
      this.setState({
        user: {
          ...newUser,
        },
      });
    }
  }

  getModalBody = () => {
    const { user, errors } = this.state;

    if (this.state.actionType === 'delete') {
      return (
        <p>
          {`Are you sure to delete User ${user.name}`}
        </p>
      );
    }

    const formField = JSON.parse(JSON.stringify(fields));
    Object.keys(user).forEach((field) => {
      formField[field].value = user[field];
    });

    return (
      <UsersForm
        fields={formField}
        errors={errors}
        onSubmit={this.saveUser}
        ref={this.userForm}
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
    this.setState({
      actionType: 'add',
      user: { ...EMPTY_USER },
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
      isUserModalOpen: !prevState.isUserModalOpen,
    }));
  };

  isValidUser = user => Object.prototype.hasOwnProperty.call(user, 'id') && user.id !== '';

  isUserMatchById = (sourceUser = {}, targetUser = {}) => sourceUser.id === targetUser.id;

  saveUser = (response) => {
    if (response) {
      const user = {};
      Object.keys(response).forEach((field) => {
        user[field] = response[field].value;
      });
      this.props.onConfirm(this.state.actionType, user);
      this.toggle();
    }
  };

  triggerForm = () => {
    if (this.state.actionType === 'delete') {
      this.props.onConfirm(this.state.actionType, this.state.user);
      this.toggle();
    } else {
      this.userForm.current.triggerForm();
    }
  }

  cancel = () => {
    let user = EMPTY_USER;
    const { user: propsUser } = this.props;

    if (this.isValidUser(this.props.user) === true) {
      user = propsUser;
    }

    this.setState({
      user: { ...user },
    }, this.toggle);
  };

  render() {
    const modalBody = this.getModalBody();
    const isUserEditDisabled = this.isValidUser(this.state.user) === false;
    const modalInfo = {
      ...this.getModalLabels(this.state.actionType),
      title: `${this.state.actionType} User`,
    };

    return (
      <div className="action-buttons">
        <Button
          color="primary"
          onClick={this.toggleAddModal}
        >
          Add
        </Button>
        <Button
          color="info"
          disabled={isUserEditDisabled}
          onClick={this.toggleEditModal}
        >
          Edit
        </Button>
        <Button
          color="danger"
          disabled={isUserEditDisabled}
          onClick={this.toggleDeleteModal}
        >
          Delete
        </Button>
        <MsModal
          okButtonLabel={modalInfo.confirmButtonText}
          cancelButtonLabel="Cancel"
          body={modalBody}
          isOpen={this.state.isUserModalOpen}
          okCallback={this.triggerForm}
          cancelCallback={this.cancel}
          modalTitle={modalInfo.title}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Users.selectedUser,
});

export default connect(mapStateToProps)(ActionButtons);

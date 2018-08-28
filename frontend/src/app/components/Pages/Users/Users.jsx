import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from '../../../actions';

class Users extends React.PureComponent {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  static defaultProps = {
    users: [],
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="user-list">
        {users.map(user => (
          <div key={`${user.id}-key`}>
            {user.email} - Edit - Delete
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.User.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(Actions.User.getUsers({ page: 0, limit: 15 })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

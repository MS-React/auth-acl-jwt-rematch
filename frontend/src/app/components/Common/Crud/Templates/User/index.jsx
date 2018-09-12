import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../../../actions';

import UsersForm, { fields } from '../../../Form/Templates/CreateUser';
import CrudTable from '../../Elements/CrudTable/CrudTable';

const columns = [{
  dataField: 'name',
  text: 'Full Name',
}, {
  dataField: 'email',
  text: 'Email',
}, {
  dataField: 'phone',
  text: 'Phone Number',
}];

class CrudUserTable extends React.PureComponent {
  static propTypes = {
    get: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  static defaultProps = {
    users: [],
  };

  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <CrudTable
        key="user-crud-table"
        title="Users List"
        form={UsersForm}
        formFields={fields}
        data={this.props.users}
        tableColumns={columns}
        selectEntity={this.props.select}
        update={this.props.update}
        create={this.props.create}
        delete={this.props.delete}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.Users.users,
});

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(Actions.Users.getUsers({ page: 0, limit: 15 })),
  select: user => dispatch(Actions.Users.selectUser(user)),
  create: user => dispatch(Actions.Users.createUser(user)),
  update: user => dispatch(Actions.Users.updateUser(user)),
  delete: user => dispatch(Actions.Users.deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrudUserTable);

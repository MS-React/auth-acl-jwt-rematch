import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../../../actions';

import UsersForm, { fields } from '../../../Form/Templates/CreateUser';
import CrudTable from '../../Elements/CrudTable/CrudTable';

const columns = [{
  dataField: 'name',
  text: 'Full Name',
  sort: true,
}, {
  dataField: 'email',
  text: 'Email',
  sort: true,
}, {
  dataField: 'phone',
  text: 'Phone Number',
  sort: true,
}];

const CrudUserTable = ({
  select,
  get,
  create,
  update,
  deleteUsers,
  users,
  selectedItem,
}) => (
  <CrudTable
    key="user-crud-table"
    title="Users List"
    form={UsersForm}
    formFields={fields}
    data={users}
    tableColumns={columns}
    selectEntity={select}
    selectedItem={selectedItem}
    update={update}
    create={create}
    delete={deleteUsers}
    get={get}
  />
);

CrudUserTable.propTypes = {
  select: PropTypes.func.isRequired,
  get: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
  users: PropTypes.array,
  selectedItem: PropTypes.object,
};

CrudUserTable.defaultProps = {
  users: [],
  selectedItem: {},
};

const mapStateToProps = state => ({
  users: state.Users.users,
  selectedItem: state.Users.selectedUser,
});

const mapDispatchToProps = dispatch => ({
  select: user => dispatch(Actions.Users.selectUser(user)),
  get: () => dispatch(Actions.Users.getUsers({ page: 0, limit: 35 })),
  create: user => dispatch(Actions.Users.createUser(user)),
  update: user => dispatch(Actions.Users.updateUser(user)),
  deleteUsers: user => dispatch(Actions.Users.deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrudUserTable);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Actions from '../../../actions';

import Header from '../Partials/Header';
import ActionButtons from '../ActionButtons/ActionButtons';

class Home extends React.PureComponent {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  static defaultProps = {
    users: [],
  };

  state = {
    selectedRow: [],
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handleUserActionType = (type = 'add', user) => {
    switch (type) {
      case 'add':
      case 'edit':
      case 'delete':
      default:
        break;
    }

    return user;
  };

  render() {
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

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#c8e6c9',
      selected: this.state.selectedRow,
      onSelect: this.setSelectedRow,
    };
    const pagination = paginationFactory();

    return (
      <div className="home-page">
        <div className="home-page--header">
          <Header />
        </div>
        <div className="container">
          <Row>
            <Col md="8">
              <h4>
                Users List
              </h4>
            </Col>
            <Col md="4">
              <div className="home-page--action-buttons">
                <ActionButtons
                  user={this.state.user}
                  onConfirm={this.handleUserActionType}
                />
              </div>
            </Col>
          </Row>
          <div className="home-page--table">
            <BootstrapTable
              keyField="id"
              data={this.props.users}
              columns={columns}
              selectRow={selectRow}
              pagination={pagination}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.Users.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(Actions.Users.getUsers({ page: 0, limit: 15 })),
  create: user => dispatch(Actions.Users.create(user)),
  update: user => dispatch(Actions.Users.update(user)),
  delete: id => dispatch(Actions.Users.delete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Actions from '../../../actions';

import Header from '../../Common/Header';
import ActionButtons from './ActionButtons/ActionButtons';

import './Home.scss';

class Home extends React.PureComponent {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    selectUser: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  static defaultProps = {
    users: [],
  };

  state = {
    selectedRow: [],
    user: {},
  };

  componentDidMount() {
    this.props.getUsers();
  }

  setSelectedRow = (user) => {
    this.setState({
      selectedRow: [user.id],
    }, () => {
      if (typeof this.props.selectUser === 'function') {
        this.props.selectUser(user);
      }
    });
  };

  handleUserActionType = (type = 'add', user) => {
    let action = () => {};

    switch (type) {
      case 'add':
        action = this.props.create;
        break;
      case 'edit':
        action = this.props.update;
        break;
      case 'delete':
        action = this.props.delete;
        break;
      default:
        break;
    }

    return action(user);
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
  selectUser: user => dispatch(Actions.Users.selectUser(user)),
  create: user => dispatch(Actions.Users.createUser(user)),
  update: user => dispatch(Actions.Users.updateUser(user)),
  delete: user => dispatch(Actions.Users.deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

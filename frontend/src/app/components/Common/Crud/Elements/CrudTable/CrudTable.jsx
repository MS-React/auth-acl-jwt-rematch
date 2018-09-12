import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import ActionButtons from './ActionButtons';

export default class CrudTable extends React.PureComponent {
  static propTypes = {
    selectEntity: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    form: PropTypes.any.isRequired,
    formFields: PropTypes.object.isRequired,
    data: PropTypes.array,
    tableColumns: PropTypes.array.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: [],
  };

  state = {
    selectedRow: [],
    selectedItem: {},
  };

  onConfirm = (type = 'add', user) => {
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
  }

  setSelectedRow = (entity) => {
    console.log('selected', entity);
    this.setState({
      selectedRow: [entity.id],
      selectedItem: entity,
    }, () => {
      this.props.selectEntity(entity);
    });
  };

  render() {
    const {
      title,
      form,
      formFields,
      data,
      tableColumns,
    } = this.props;

    const pagination = paginationFactory();
    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#c8e6c9',
      selected: this.state.selectedRow,
      onSelect: this.setSelectedRow,
    };
    console.log(selectRow);

    return (
      <div className="container">
        <Row key="crud-table-row-key">
          <Col md="8">
            <h4>{title}</h4>
          </Col>
          <Col md="4">
            <div className="home-page--action-buttons">
              <ActionButtons
                form={form}
                formFields={formFields}
                selectedItem={this.state.selectedItem}
                onConfirm={this.onConfirm}
              />
            </div>
          </Col>
        </Row>
        <div className="home-page--table">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={tableColumns}
            selectRow={selectRow}
            pagination={pagination}
          />
        </div>
      </div>
    );
  }
}

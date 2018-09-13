import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ActionButtons from './ActionButtons';

export default class CrudTable extends React.PureComponent {
  static propTypes = {
    selectedItem: PropTypes.object.isRequired,
    selectEntity: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    form: PropTypes.any.isRequired,
    formFields: PropTypes.object.isRequired,
    data: PropTypes.array,
    tableColumns: PropTypes.array.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: [],
  };

  state = {
    selectedRow: [],
  };

  componentDidMount() {
    this.props.get();
  }

  onConfirm = (type = 'add', entity) => {
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

    return action(entity);
  }

  setSelectedRow = (entity) => {
    this.setState({
      selectedRow: [entity.id],
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
      selectedItem,
    } = this.props;

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#c8e6c9',
      selected: this.state.selectedRow,
      onSelect: this.setSelectedRow,
    };
    const pagination = paginationFactory();
    const { SearchBar } = Search;

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
                selectedItem={selectedItem}
                onConfirm={this.onConfirm}
              />
            </div>
          </Col>
        </Row>
        <div className="home-page--table">
          <ToolkitProvider
            keyField="id"
            search
            data={data}
            columns={tableColumns}
          >
            {
              props => (
                <div>
                  <SearchBar {...props.searchProps} />
                  <hr />
                  <BootstrapTable
                    selectRow={selectRow}
                    pagination={pagination}
                    {...props.baseProps}
                  />
                </div>
              )
            }
          </ToolkitProvider>
        </div>
      </div>
    );
  }
}

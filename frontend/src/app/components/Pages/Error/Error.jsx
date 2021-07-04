import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

export default class Error extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  state = {
    hasError: false,
    error: false,
    info: false,
  };

  componentDidCatch(error, info) { // eslint-disable-line
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Something went wrong!!!</h1>
          <div className="error-report">
            <h3>Error: {this.state.error.name}</h3>
            <p>{this.state.error.message}</p>
          </div>
          <div className="info-report">
            <h3>Component Stack:</h3>
            <p>{this.state.info.componentStack}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

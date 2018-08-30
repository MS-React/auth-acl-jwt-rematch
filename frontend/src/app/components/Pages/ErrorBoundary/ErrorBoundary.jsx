import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.array.isRequired,
  };

  state = { hasError: false, error: null, info: null };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Something went wrong!!!</h1>
          <p>Error: {this.state.error}</p>
          <p>Info: {this.state.info}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

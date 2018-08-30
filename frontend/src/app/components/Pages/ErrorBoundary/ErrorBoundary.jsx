import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  state = { hasError: false };

  componentDidCatch(error, info) { // eslint-disable-line
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Something went wrong!!!</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

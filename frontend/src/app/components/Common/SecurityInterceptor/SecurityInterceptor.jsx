import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

export default class SecurityInterceptor extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    authenticate: PropTypes.func.isRequired,
    logged: PropTypes.bool,
    UnauthenticatedComponent: PropTypes.func,
    token: PropTypes.string,
  };

  static defaultProps = {
    logged: false,
    UnauthenticatedComponent: null,
    token: null,
  }

  componentWillMount() {
    this.props.authenticate(this.props.token);
  }

  render() {
    const {
      logged, UnauthenticatedComponent, children, ...rest
    } = this.props;

    if (!logged) {
      return <UnauthenticatedComponent key="unauthenticated-key" />;
    }

    return (
      <Route {...rest}>
        <React.Fragment>
          {children}
        </React.Fragment>
      </Route>
    );
  }
}

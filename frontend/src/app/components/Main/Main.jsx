import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';

import { createRoute } from '../Routes';
import routes from '../../../config/routes';

import NavBar from '../NavBar';

import '../../assets/styles/global.scss';

class Main extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      logged: PropTypes.bool,
    }),
  };

  static defaultProps = {
    user: {
      logged: false,
    },
  };

  render() {
    return (
      <main className="app-container">
        <Router>
          <React.Fragment>
            <NavBar
              routes={routes}
              user={this.props.user}
            />
            <hr />
            <Switch>
              {routes.map(route => createRoute(route, this.props.user.logged))}
            </Switch>
          </React.Fragment>
        </Router>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User,
});

export default connect(mapStateToProps, {})(Main);

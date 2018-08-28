import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Link,
} from 'react-router-dom';

import { createRoute } from '../Routes';
import routes from '../../../config/routes';

import '../../assets/styles/global.scss';

class Main extends React.PureComponent {
  static propTypes = {
    User: PropTypes.shape({
      logged: PropTypes.bool,
    }),
  };

  static defaultProps = {
    User: {
      logged: false,
    },
  };

  render() {
    return (
      <main className="game-container">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              {routes.map(route => createRoute(route, this.props.User.logged))}
            </Switch>
          </div>
        </Router>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  User: state.User,
});

export default connect(mapStateToProps, {})(Main);

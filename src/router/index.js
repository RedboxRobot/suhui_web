import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export class SubRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const { ...route } = this.props;

    return (
      <Route
        path={route.path}
        render={(props) => {
          console.log('route', route.children);
          return (
            <route.component {...props} routes={route.children} />
          );
        }}
      />
    );
  }
}

export default ({routeConfigs}) => (
  <Router>
    <Switch>
      {
        routeConfigs.map((route, index) => (
          <Route
            key={index}
            exact={!!route.exact}
            path={route.path}
            render={() =>
              route.redirect ? (
                <Redirect to={route.redirect} />
              ) : (
                <SubRoutes {...route} />
              )
            }
          />
          )
        )
      }
    </Switch>
  </Router>);

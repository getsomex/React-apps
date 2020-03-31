import React from 'react';

import { Link, Route, Router } from 'react-router-dom';
import AppList from '../routes/AppList';
import History from '../history';
class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={History}>
          <Link to="/list" className="item">
            AppList
          </Link>
          <Route path="/list" exact component={AppList} />
        </Router>
      </div>
    );
  }
}

export default App;

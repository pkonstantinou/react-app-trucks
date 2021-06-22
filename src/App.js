import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>
        <Route path='/logout' exact>
          <Logout />
        </Route>
        <Redirect from='/' to='/dashboard' exact />
      </Switch>
    </div>
  );
}

export default App;

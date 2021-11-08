import logo from './logo.svg';
import './App.css';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import AdminLogin from './components/admin_login';
import Home from './components/home';
import AdminPage from './components/admin_page';
import DetailsPage from './components/details_page';
import { useState } from 'react';
import { setReject } from './services/UI_to_node';
function App() {
  const [request,setRequest] = useState('')
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <Router>
      <Switch>
        {/* <Route exact path = '/' component = {Home}/>
        <Route path = '/login-as-admin' component = {AdminLogin}/>
        <Route path = '/admin_page' component = {AdminPage}/> */}
        <Route path = '/login-as-admin'>
          <AdminLogin/>
        </Route>
        <Route path = '/admin-page:id'>
          {/* <AdminPage user = {user} setUser ={setUser}/> */}
          <AdminPage/>
        </Route>
        <Route path = '/requestDetails/:id'>
          {/* <DetailsPage request={request} setRequest={setRequest}/> */}
          <DetailsPage/>
        </Route>
        <Route path = '/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

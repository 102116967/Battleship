import React from 'react';
import Home from './Home.js';
import Store from './Store.js'
import ContactUs from './ContactUs.js'
import Error from './Error.js'
import './App.css';
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
             <Route path="/" component={Home} exact />
             <Route path="/Home" component={Home} />
             <Route path="/Store" component={Store} />
             <Route path="/ContactUs" component={ContactUs} />
             <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;

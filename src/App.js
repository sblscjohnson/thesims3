import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store'
import routes from './routes';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return ( 
      <div>
        <Provider store={store}>
          <HashRouter>
            <div>
              <Nav />
              {routes}
            </div>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

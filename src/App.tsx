import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
// Components
import Header from './Components/Layout/Header';
import Container from './Components/Layout/Container';
import { BrowserRouter as Router } from 'react-router-dom';
// Type Def
import Dotenv from 'dotenv';
Dotenv.config();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Container />
        </React.Fragment>
      </Provider>
    </Router>
  );
}

export default App;

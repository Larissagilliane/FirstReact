import React, { Component, Fragment } from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import "./styles.css"
import PropTypes from 'prop-types';

class App extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <h1>Testando</h1>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));

export default App;

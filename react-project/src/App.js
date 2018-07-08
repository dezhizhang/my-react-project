import React, { Component } from 'react';
import { Button,Layout } from 'antd'
import MyHeader from './components/MyHeader'
import MyContent from './components/MyContent'
import MyFooter from './components/MyFooter'
import logo from './logo.svg';
import './App.css';
const {Header,Footer}=Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
       <MyHeader/>
       <MyContent/>
       <MyFooter/>
      </div>
    );
  }
}

export default App;

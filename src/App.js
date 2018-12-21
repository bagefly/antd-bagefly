import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary"><Icon type="play-circle" />play</Button>
      </div>
    );
  }
}

export default App;

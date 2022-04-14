import './App.css';
import Form from './components/Form';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './components/Result';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h2 className="align-items-center">Biodata</h2>
        <Form />
      </div>
    );
  }
}

export default App;

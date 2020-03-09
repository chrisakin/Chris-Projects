import React from 'react';
import Products from './Products.js';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div >
        <header className="App-header"><h1>Product List App</h1></header>
        <section className="body">
          <Products ></Products>
        </section>
      </div>
    );
  }
} 

export default App;
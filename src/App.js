import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./img/logoPizza.png"
import example from "./example.js"
import Hello from "./Hello"

function App() {
  return (
  <nav>
    <div class="nav-wrapper">
      <img src={logo} width='<60' height='60'></img>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a>Home</a></li>
        <li><a>Menu</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default App;

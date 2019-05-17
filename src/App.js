import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form name="contact" method="POST" data-netlify="true">
<p>
  <label>Your Name: <input type="text" name="name" /></label>
</p>
<p>
  <label>Your Email: <input type="email" name="email" /></label>
</p>
<p>
  <label>Your Role: <select name="role[]" multiple>
    <option value="leader">Leader</option>
    <option value="follower">Follower</option>
  </select></label>
</p>
<p>
  <label>Message: <textarea name="message"></textarea></label>
</p>
<p>
  <button type="submit">Send</button>
</p>
</form>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

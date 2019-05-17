import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
<p>
  <form name="contact" method="POST" data-netlify="true">
  <label>Nombre: <input type="text" name="name" /></label>
  <label>Correo Electrónico: <input type="email" name="email" /></label>
  <label>Rol: <select name="role[]" multiple>
  <option value="leader">Líder</option>
  <option value="follower">Seguidor(a)</option>
  </select></label>
  <label>Mensaje: <textarea name="message"></textarea></label>
  <button type="submit">Enviar</button>

</form>
</p>

        </header>
      </div>
    );
  }
}

export default App;

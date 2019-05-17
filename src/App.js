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
</p>
<p>
  <label>Nombre: <input type="text" name="name" /></label>
</p>
  <label>Correo Electrónico: <input type="email" name="email" /></label>
<p>
  <label>Rol: <select name="role[]" multiple>
  <option value="leader">Líder</option>
  <option value="follower">Seguidor(a)</option>
  </select></label>
</p>
<p>
  <label>Mensaje: <textarea name="message"></textarea></label>
</p>
</p>
  <button type="submit">Enviar</button>
</p>
</form>


        </header>
      </div>
    );
  }
}

export default App;

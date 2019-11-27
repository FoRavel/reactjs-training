import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import logo from './logo.svg'
import './App.css';
import './custom.scss';

function App() {
  return (
    <div className="container">
      <div className="messages border">
      </div>
      <form className="form-inline">
          <input type="text" className="form-control rounded-0 flex-fill" />
          <input type="button" value="Envoyer" className="btn btn-primary rounded-0" />
      </form>
    </div>
  );
}

export default App;

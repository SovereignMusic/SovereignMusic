import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span>Sovereign Music</span>
        </div>
          <section className="body">
            <span className="App-intro">Music Publishing</span>
            <br></br>
            <span className="App-intro">Copyright Administration</span>
            <br></br>
            <span className="App-intro">Copyright Reversion</span>
          </section>
          <section className="body2">
            <span className="App-outro">For inquiries, contact: <a className="link" href="mailto:mark@sovereignmusicllp.com">mark@sovereignmusicllp.com</a></span>
          </section>
        <footer>
          <span className="footer">Full Website Coming Soon.</span>
        </footer>
      </div>
    );
  }
}

export default App;

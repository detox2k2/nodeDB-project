import React, { Component } from 'react';
import logo from './logo.svg';
import girl from './girl.jpeg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'wishes',
      caption: ''
    }
  }
  render(){
  return (
    <div>
      
      <header>
        <h1>I WISH YOU WOULD</h1>
        <picture className= 'logo-picture'>
          <img src = {'./girl.jpeg'} alt='picture of fingers crossed'/>
        </picture>
      </header>
      
      <form>
      <input/>
      <h6>Input your caption here</h6>
      <input/>
      <h6>Input your picture here</h6>
      <button> ENTER </button>
      </form>

      <section>
        <button>EDIT</button>
        <button>DELETE</button>
      </section>
    </div>
  );
}
}

export default App;

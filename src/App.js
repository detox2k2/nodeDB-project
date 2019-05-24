import React, { Component } from 'react';
import girl from './girl.jpeg';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Enter from './components/Enter'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      caption: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({ [e.target.caption]: e.target.value});
  }
  render(){
  return (
    <div>
      
      <header>
        <h1>I WISH YOU WOULD</h1>
        <picture className= 'logo-picture'>
          <img src = {girl} alt='picture of fingers crossed'/>
        </picture>
      </header>
      
      <form>
      <input name='caption' onChange={this.handleChange} placeholder='Caption'/>
      <h6>Input your caption here</h6>
      <input name= 'image' onChange={this.handleChange} placeholder='Image'/>
      <h6>Input your picture here</h6>
      <Enter/>
      </form>

      <section>
       {/* <Edit/> */}
      {/* <Delete/> */}
     </section>

    </div>
  );
}
}

export default App;

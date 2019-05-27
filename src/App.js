import React, { Component} from 'react';
import './App.css';
import MemeDisplay from './components/MemeDisplay';
import Form from './components/Form'
import axios from 'axios';
import Main from './components/Main';



class App extends Component {
  constructor () {
    super();
    this.state ={
      memes: [],
      caption: '',
      image: '',
    };
this.handleCaption = this.handleCaption.bind(this);
this.handleImage = this.handleImage.bind(this);
this.updateMemes = this.updateMemes.bind(this)
  }
  componentDidMount (){
    axios.get('/api/memes').then(response => {
      this.setState({ memes: response.data});
    });
  }

  updateMemes(update) {
    this.setState({memes: update});
  }
  createMeme(e) {
    e.preventDefault();
    axios.post('/api/memes', {
      caption: this.state.caption,
      image: this.state.image,
    }) 
    .then(response => {
      this.setState({memes: response.data})
    })
      .catch(error => {
        console.log(error);
      })
  }
  handleCaption(value){
    this.setState({caption: value});
  }
  handleImage(value){
    this.setState({image: value})
  }

  render(){
    const {memes} = this.state;
    return (
      <div className="App">
        <Main/>
        <Form
        handleCaption={this.handleCaption}
        handleImage={this.handleImage}
        createMeme={e => this.createMeme(e)}
        />
        <MemeDisplay
          memes={memes}
          updateMemes={this.updateMemes}
        />
        </div>
    )
  }
}

export default App;
















































// import React, { Component } from 'react';
// import girl from './girl.jpeg';
// // import Delete from './components/Delete';
// // import Edit from './components/Edit';
// import Enter from './components/Enter'
// import Memes from './components/Memes';
// import Meme from './components/Meme';
// import './App.css';
// import Axios from 'axios';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       caption: '',
//       image: '',
//       memes: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.addMeme = this.addMeme.bind(this);
//     this.updateMemes = this.updateMemes.bind(this);
//   }
//   handleChange(e){
//     this.setState({ [e.target.name]: e.target.value});
//   }
//   addMeme(e){
//     e.preventDefault()
//     Axios.post('/api/memes', {
//       caption: this.state.caption,
//       image: this.state.image
//     })
//     .then(response => {
//       this.updateMemes(response.data)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// updateMemes(update){
//   this.setState({memes: update})
// }
 
// getMemes(){
//   Axios
//   .get('/api/memes/')
//   .then(response => {
//       this.setState({memes: response.data});
//   })
//   .catch(error => {
//       this.setState({loading: false, error: 'An error has occurred'});
//   });
// }

//   render(){
//     console.log(this.state.memes)
//   return (
//     <div>
      
//       <header>
//         <h1>I WISH YOU WOULD</h1>
//         <picture className= 'logo-picture'>
//           <img src = {girl} alt='picture of fingers crossed'/>
//         </picture>
//       </header>
      
//       <form>
//       <input name='caption' onChange={this.handleChange}value={this.state.caption} placeholder='Caption'/>
//       <h6>Input your caption here</h6>
//       <input name= 'image' onChange={this.handleChange} value={this.state.image} placeholder='Image'/>
//       <h6>Input your picture here</h6>
//       <Enter addMeme= {this.addMeme } />
//       </form>
//       <section>
//       <Memes memes= {this.state.memes} />
//      </section>

//     </div>
//   );
// }
// }

// export default App;

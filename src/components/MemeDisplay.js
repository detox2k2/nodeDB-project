import React, { Component } from "react";
// import "./App.css";
import axios from "axios";
import Edit from "./Edit";

class MemeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      meme: ""
    };
    this.editMeme = this.editMeme.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  editMeme(caption) {
    this.setState({ edit: true, meme: caption });
  }

  deleteMeme(caption) {
    console.log(caption)
    axios.delete(`/api/memes/${caption}`).then(response => {
      console.log(response.data)
      this.props.updateMemes(response.data);
    });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    let  MemesList  = this.props.memes.map((element, index) => {
      
      return (
        <div key={index} className="meme-list">
          <h2 className= 'meme-caption'>{element.caption}</h2>
          <img className="meme-image" src={element.image} alt='' />
          <button onClick={() => this.editMeme(element.caption)} className= 'edit-delete-buttons'>Edit</button>
          <button onClick={() => this.deleteMeme (element.caption)} className= 'edit-delete-buttons'>Delete</button>
        </div>
      );
    });
    return (
      
      <form className ='meme-container'  >
        
        <div className="meme-container">{MemesList}</div>
        {this.state.edit === true ? (
          <Edit
            toggleEdit={this.toggleEdit}
            updateMemes={this.props.updateMemes}
            meme={this.state.meme}
          />
        ) : null}
      </form>
    );
  }
}

export default MemeDisplay;
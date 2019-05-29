import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editCaption: '',
            editImage: '',
        };
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    editMeme(e) {
        e.preventDefault();
        axios.put(`/api/memes/${this.props.meme}`,{
            caption: this.state.editCaption,
            image: this.state.editImage,
        }).then(response =>{ console.log(response.data)
            this.props.updateMemes(response.data)
        this.props.toggleEdit()
    })
    .catch(error => {
        console.log(error);
      })
    }

    render(){
        return (
            <section>
                <div className='form-component'>
                    
            
                    <h4>Caption</h4>
                    <input className = "form-component-input"
                        name='editCaption'
                        value={this.state.editCaption}
                        onChange={(e) => this.handleChange(e)}
                        />
                    <h4>Image</h4>
                    <input className = "form-component-input"
                        name='editImage'
                        value={this.state.editImage}
                        onChange={(e) => this.handleChange(e)}
                        />
                    <button className = 'form-component-enter' onClick= {e => { this.editMeme(e);}}> Enter </button>
                    
                </div>
            </section>
        );
    }
}


export default Edit
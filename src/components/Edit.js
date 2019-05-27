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
        }).then(response =>{this.props.updateMemes(response.data)
        this.props.toggleEdit()
    })
    }

    render(){
        return (
            <section>
                <form className='form-component'>
                    
            
                    <h4>Caption</h4>
                    <input className = "form-component-input"
                        caption='editCaption'
                        value={this.state.editCaption}
                        onChange={(e) => this.handleChange(e)}
                        />
                    <h4>Image</h4>
                    <input className = "form-component-input"
                        image='editImage'
                        value={this.state.editImage}
                        onChange={(e) => this.handleChange(e)}
                        />
                    <button className = 'form-component-enter' onClick= {e => { this.editMeme(e);}}> Enter </button>
                </form>
            </section>
        );
    }
}


export default Edit
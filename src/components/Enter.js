import React from 'react'
import Axios from 'axios';

function Enter(props){
    
    return (
        <section>
            onSubmit = {e => {
        e.preventDefault();
        Axios.post('/api/memes', {
            caption: props.memes.caption,
            image: props.memes.image
        })
        .then(response => {
            console.log(response.data);
            this.props.memes
        })
        .catch(error => {
            console.log(error)
        })
    }};
        <button className = 'buttons' onClick= {()=> props.updateMeme(props.caption)}>ENTER</button>

        </section>
    )
}


export default Enter;
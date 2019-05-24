import React from 'react'
import Axios from 'axios';

function Delete(props){
    return (
        <section>
            
        <button className = 'buttons' onClick={() => {
            console.log(props.meme.caption)
            Axios.delete('/api/memes/' + props.meme.caption).then(response => {
                props.updateMemes(response.data);
            })
        }}>DELETE</button>

        </section>
    )
}


export default Delete;
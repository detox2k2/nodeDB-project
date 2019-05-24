import React from 'react';
import axios from 'axios';

function Meme(props){
    return (
        <section className= 'displayMeme'>         
         <img src={props.meme.caption} alt={props.meme.image}/>
         <Delete meme={props.meme}/>
         <Edit meme={props.meme}/>
        </section>
        
        
    )
}
export default Meme;
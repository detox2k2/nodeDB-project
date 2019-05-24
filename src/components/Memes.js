import React, { Component} from "react";
import axios from "axios";
import meme from './Meme';
import { url } from "inspector";

class Memes extends Component {
    constructor(props){
        super(props);
        this.state = {
            memes: [],
            loading: true,
            error: ""
        };
        this.updateMemes = this.updateMemes.bind(this)
    }
    componentDidMount(){
        axios
        .get(url)
        .then(resonpse => {
            this.setState({memes: resonpse.data});
        })
        .catch(error => {
            this.setState({loading: false, error: 'An error has occured'});
        });
    }
    updateMemes(newMemes) {
        this.setState({memes: newMemes});
    }
    render (){
        const { memes } = this.state;
        return (
            <section>
                {memes.map((meme,index) => (
                    <Meme key= {index} meme={meme} updateMemes={this.updateMemes}/>
                ))}
            </section>
        )
    }
}

export default Memes;
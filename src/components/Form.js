import React, {Component} from 'react';


class Form extends Component {

    render () {
        return(
            <div className="form-component">
            <form className="form-component">
            <br/>
            <h4>Caption</h4>
            <input className="form-component-input"onChange={(e)=>{this.props.handleCaption(e.target.value)}}/>
            <h4>Image</h4>
            <input className="form-component-input" onChange={(e)=>{this.props.handleImage(e.target.value)}}/>
            <br/>
            <button className= 'form-component-enter' onClick={(e)=>this.props.createMeme(e)}>Enter</button>
     
            </form>
            </div>
        )
    }
}

export default Form;
import React, { Component } from 'react'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            n1:e.target.value
        })
    }
    render() {
        return (
            <div>
                <label style={{
                    color:this.state.n1+this.state.n2>10?'red':'green',
                    fontSize:30
                    }} 
                    htmlFor="inp">输入：</label>
                <input id="inp" name="n1" onChange={this.handleChange} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}
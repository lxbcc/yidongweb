import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: JSON.parse(localStorage.getItem('todolist'))||[
                // {title:1,checked:false},
                // {title:2,checked:true}
            ],a:0,b:0
        }
    }
    addItem = (msg)=>{
        var value ={
            title:msg,
            checked:false
        };
        var todo=[...this.state.todo,value];
        this.setState({
            todo:todo
        },()=>{
            this.doing();
        }
        )

        localStorage.setItem('todolist',JSON.stringify(todo));
    }
    delItem = (a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo:todo},()=>{
                this.doing();
            }
        )
        localStorage.setItem('todolist',JSON.stringify(todo));
    }
    checkboxChange = (idx) => {
        let todo = [...this.state.todo];
        todo[idx].checked = !todo[idx].checked;
        this.setState({
            todo: todo
        },()=>{
            this.doing();
        });
       
        localStorage.setItem('todolist',JSON.stringify(todo));
    }

    doing=(item)=>{
        var a=0;
        var b=0;
        this.state.todo.forEach((item)=>{
            if (!item.checked) {
                a++;
            }
            else{
                b++;
            }
        });
        this.setState({
            a:a,
            b:b
        })
    }
    


    componentDidMount(){
        var todolist=JSON.parse(localStorage.getItem('todolist'));
        if(todolist){
            this.setState({
                todo:todolist
            })
        }
        this.doing();
    }


    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo} change={this.checkboxChange} a={this.state.a} b={this.state.b}/>
                
            </div>
        )
    }
}
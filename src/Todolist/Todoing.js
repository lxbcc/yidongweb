import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.a}</h1>
                <ul className="list">
                {
                    this.props.todo.map((item,idx)=>{
                        if(!item.checked){
                            return (
                              <li key={idx}><input type='checkbox' checked={item.checked} onChange={()=>{this.props.change(idx)}}/>=={item.title}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>
                            )}
                    })
                    
                }
                </ul>
                <h1>已经完成{this.props.b}</h1>
                <ul className="list">
                    {
                         this.props.todo.map((item,idx)=>{
                            if(item.checked){
                                return (
                                  <li key={idx}><input type='checkbox' checked={item.checked} onChange={()=>{this.props.change(idx)}}/>=={item.title}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>
                                )}
                        })
                    }
                </ul>
            </div>
        )
    }
}
import React from 'react';
import {useState} from 'react';



const Form = (props)=>{
const [textBox, setTextBox]= useState("")
const {toDoList, setToDoList}= props;

const handleClicker =(e)=>{
    e.preventDefault();
    setToDoList([...toDoList,{toDo:textBox,finished:false}])
}

    return(

        <div>
            <form onSubmit={handleClicker}>
                
                <label htmlFor=""></label>
                <input type="text" onChange={(e)=>setTextBox(e.target.value)}/>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default Form;
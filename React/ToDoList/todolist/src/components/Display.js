import React from 'react';


const Display = (props) => {
    const { toDoList, setToDoList } = props;

    const checkBoxHandler = index => {
        const newList = toDoList.map((toDo, i) => {
            if (i === index) {
                toDo.finished = !toDo.finished
            }
            return toDo
        }
        )
        setToDoList(newList)
    }

    const deleteHandler =index=> {
        const newList = toDoList.filter((toDo, i) => {
            return (i !== index) 
                
            
            
        }
        )
        setToDoList(newList)
        
    }

    return (

        <div>
            {
                toDoList.map((toDo, index) => (
                    <div>
                        <span>{toDo.toDo}</span>
                        <input type="checkbox" value={toDo.finished} onChange={e => checkBoxHandler(index)} />
                        {
                            toDo.finished?
                            <button onClick={e => deleteHandler(index)}>Delete</button>
                            :null
                            
                        }
                    </div>
                ))
            }
        </div>
    )


}





export default Display;
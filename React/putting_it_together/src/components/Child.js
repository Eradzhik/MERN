import React, { useState } from 'react';



//usestate (is a hook)able to change unlike props.
//props doesnt change
// props allows us to pass object from parent to child
const Child = (props) => {
    //we decosntructing our getter and setter from usestate hook

    const { name, age, colorHair } = props
    const [birthday, setBirthday] = useState(age)
    


    return (
        <div>
            <p>Name: {name}</p>
            <p>Age:{birthday}</p>
            <p>HairColor:{colorHair}</p>
            <button onClick={(e)=>setBirthday(birthday+1)} > Happy Birthday </button>
            <button onClick={(e)=>setBirthday(birthday-1)}> Not Birthday</button>
            

        </div>





    )


}



export default Child;




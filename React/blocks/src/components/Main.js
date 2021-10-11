import React from 'react';
import Subcontents from './Subcontents';



const Main = (props) =>{

    const stringy = (a) => {
        return a;
    }

    const multiply = (a,b) => {
        console.log ("hello");
        return a*b;
    }



    return(
        <div className="main">
            Main

            <Subcontents multiply={multiply(10,20)} stringy={stringy("Bob")}  text="subcomponent1"/>


            <Subcontents array={[555,33,1010,300]} multiply={multiply(5,5)} stringy={stringy("John")} text="subcomponent2"/>


            <Subcontents array={[4,5,6,6]} multiply={multiply(6,2)} stringy={stringy("Esra")} text="subcomponent3"/>


        </div>
    )
}



export default Main;





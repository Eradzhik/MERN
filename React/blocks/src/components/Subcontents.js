import React from 'react';



const Subcontents = (props) => {

    const {text, stringy, array} = props;



    return (
        <div className="subcontents">
            Subcontents

            <p>{text}</p>
            <p>{stringy}</p>
            <p>{props.multiply}</p>
            <p>{array}</p>

            {
                array?// this is like if
                array.map((arr, index)=>(
                    <p key={index}>{arr}</p>
                ))
                :null // this is else
            }



        </div>
    )
}


export default Subcontents;
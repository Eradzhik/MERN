import React, {useState} from 'react';





const Child = (props) => {

    const { name, email, city, state ,likes,worth} = props;
//getter method currentLikes,  setter method setCurrentLikes
    const [currentLikes, setCurrentLikes] = useState(likes);
    const [currentMoney, setCurrentMoney] = useState(worth);
    const [hasLiked, setHasLiked] = useState(false);

    //const [hasLiked, setHasLiked] =useState(false);



    const likeHandler = (e) =>{
        setCurrentLikes(currentLikes +1);
        setHasLiked(!hasLiked);
        console.log(e);
        console.log(e.target);
    }

    const addMoney = ()=>{
        setCurrentMoney(currentMoney+1000);

    }

    const subtractMoney = ()=>{
        setCurrentMoney(currentMoney-1000);
        
    }

    //<p>{props.coolObject.name}</p>this is another way to destrcut

    return (
        <div>

            {/* <p>{coolObject.name}</p>
            <p>{coolObject.email}</p>
            <p>{coolObject.city}</p>
            <p>{coolObject.state}</p>
             */}

            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>City:{city}</p>
            <p>State:{state}</p>
            <p>Likes:{currentLikes}</p>
            <p>Worth:{currentMoney}</p>

            {
                hasLiked ===false?
                <button onClick={ (e)=>likeHandler(e)}>Like</button>
                :<button disabled>One Per Person</button>

            }


            
            <button onClick={addMoney}>Add Money</button>
            <button onClick={(e)=>subtractMoney()}>Take Money</button>
            

        </div>
    )
}


export default Child;
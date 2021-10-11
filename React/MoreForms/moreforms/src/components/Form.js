import React, {useState} from 'react';


const Form = (props) =>{
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")



    return(

<div>
    <form>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
            <button onClick={e=>setFirstName("")}>Clear</button>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}></input>   
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} id="email"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} id="password"/>
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}  id="confirmPassword"/>
        </div>
    </form>

    <p>Your Form Data</p>

    <p>First Name {firstName} </p>
    <p>Last Name {lastName}</p>
    <p>Email {email}</p>
    <p>Password {password}</p>
    <p>Confirm Password {confirmPassword}</p>


</div>


    )




}












export default Form;




import React, {useState} from 'react';



const Form = (props) =>{
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const[firstNameError,setFirstNameError]=useState("")
    const[lastNameError,setLastNameError]=useState("")
    const[emailError,setEmailError]=useState("")
    const[passwordError,setPasswordError]=useState("")
    const[confirmPasswordError,setConfirmPasswordError]=useState("")

    const handleFirstName = (e)=>{
        setFirstName (e.target.value);
        if(e.target.value.length<2) {
            setFirstNameError("Field must be at least two characters")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastName =e=>
        {
            setLastName(e.target.value)
            if(e.target.value.length<2){
                setLastNameError("Field must at least two characters")
            } else {
                setLastNameError("")
            }
                
        }

        const handleEmail = (e)=>{
                setEmail(e.target.value)
            if(e.target.value.length<5){
                setEmailError("Field should be more than 5")
            } else {
                setEmailError("")
            }
        }

        const handlePassword = (e)=>{
            setPassword(e.target.value)
        if(e.target.value.length<8){
            setPasswordError("Field should be more than 8")
        } else {
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
    if(e.target.value!==password){
        setConfirmPasswordError("Password must match!")
    } else {
        setConfirmPasswordError("")
    }
}







    //test
    return(

<div>
    <form>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={handleFirstName}></input>
            <button onClick={e=>setFirstName("")}>Clear</button>
            {
            firstNameError?
            <p>{firstNameError}</p>
            : null
            }
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={handleLastName}></input>   
            {
                lastNameError?
                <p>{lastNameError}</p>
                :null
            }
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={handleEmail} id="email"/>
            {
                emailError?
                <p>{emailError}</p>
                :null
            }
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={handlePassword} id="password"/>
            {
                passwordError?
                <p>{passwordError}</p>
                :null
            }

        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPassword}  id="confirmPassword"/>
            {
                confirmPasswordError?
                <p>{confirmPasswordError}</p>
                :null
            }
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




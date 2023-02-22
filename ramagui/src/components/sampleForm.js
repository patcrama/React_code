import React, { useState } from 'react';
import axios from 'axios';

function SampleForm(){
    
const [input,setInput]=useState({});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.elements);
        const firstName=e.target[0].value;
        console.log('input',input);
        //const inputData=
        //const firstName=e.target.target;
        //http://localhost:8080/api/rama/hello
         await axios.get(`http://localhost:8080/api/rama/${firstName}`)
         .then(data=>console.log('get response',data.data))
         .catch(error=>console.log('Error ',error));

    }
const handleChange=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setInput(values=>({...values,[name]:value}));
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input name="firstName" type="text" onChange={handleChange}/>
                <label htmlFor='lastName'>Last Name</label>
                <input name="lastName" type="text" onChange={handleChange}/>
                <button type="submit" >Submit</button>

            </form>
        </div>
    )
}
export default SampleForm;
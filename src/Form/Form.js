import React,{useState} from "react"


const Form= ()=>{
   const [values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

   const [error,setError] = useState({})


const Validation=(values)=>{
    let errors={}
     if (values.username.length<=7){
       errors.name = "username should have 8 characters and above"
    }
    else if (values.password!==values.confirmPassword){
        errors.confirmPassword = "password don't match"
    }
    return errors;
 }


  
 const handleSubmit =(e)=>{
    e.preventDefault()
    setError(Validation(values))
 }

 
 const handleChange=(e)=>{
 setValues({...values, [e.target.name]:e.target.value})
 
}
console.log(values)

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
    <label>username</label>
        <input type="text" onChange={handleChange} 
                placeholder="username" value={values.username} 
                name="username"
        />
       {error.name && <p style={{color:"red", padding:.5}}>{error.name}</p>}
    <label>Email</label>
        <input type="email" onChange={handleChange} 
                placeholder="email" value={values.email} 
                name="email"
        />
      
    <label>Password</label>
        <input type="text" onChange={handleChange}                                                  
                placeholder="passsword" value={values.password} 
                name="password"
        />
    <label>ConfirmPassword</label>
        <input type="text" onChange={handleChange} 
                placeholder="confirm password" value={values.confirmPassword} 
                name="confirmPassword"
        />
        {error.confirmPassword && <p style={{color:"red", padding:.5}}>{error.confirmPassword}</p>}
        

        <div className="btn"> 
           <button className="subform">Cancel</button>
           <button className="subform">continue</button>
        </div>
           </form>

        </div>
    )
}
export default Form
import React, { useState } from 'react'

function Form() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();  
    setErrors(errors);
    if(object.keys(errors).length === 0) {
      alert("Done");
    }
  }
    

    const validate = () => {
       const error = {};

       if(!email) {
           error.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
              error.email = "Email not Matched";
           } else {
            error.email = "";
           }
       

       if(!password) {
        error.password = "Password is Required";
     } else if (password.length < 8) {
           error.password = "Password not Matched";
        } else {
         error.password = "";
        }

        return error;
    }
    

  return (
    <div className='container'>
        <div className='form_container'>
          <div className='form-text'>Login Form</div>
          <form   onSubmit={handleSubmit}>
            <div className='form_group'>
             <label htmlFor='email'>Email</label>
             <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
             {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div className='form_group'>
             <label htmlFor='password'>Password</label>
             <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
             {errors.password && <div className='error'>{errors.password}</div>}

            </div>
            <button >Login Now</button>
          </form>
          <a href='#'>Sign Up</a>
        </div>
    </div>
  )
  }

export default Form
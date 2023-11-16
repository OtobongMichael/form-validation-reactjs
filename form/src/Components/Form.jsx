import React, { useState } from 'react'

function Form() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

  return (
    <div className='container'>
        <div className='form_container'>
          <form>
            <div className='form_group'>
             <label htmlFor='email'>Email</label>
             <input type='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form_group'>
             <label htmlFor='password'>Passwordl</label>
             <input type='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button></button>
          </form>
        </div>
    </div>
  )
}

export default Form
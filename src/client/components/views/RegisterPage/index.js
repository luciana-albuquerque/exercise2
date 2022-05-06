import React, { useState } from "react";
import './registerPage.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../../firebase-config'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main className="registerPage">
      <div className='register'>
        <h3>REGISTER</h3>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <input type='password' placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button onClick={register}>Create Account</button>
        <p>Already have an account? <a href='/login'>Sign in here.</a></p>
      </div>
    </main>
  );
}

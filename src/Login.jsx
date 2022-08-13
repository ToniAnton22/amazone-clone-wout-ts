import React,{useState} from 'react'
import './Login.css'
import {Link} from "react-router-dom"
import {auth} from './firebase'

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault()
            
    }
    const register = e =>{
        e.preventDefault()

        
    }
    return (
        <div className="login">
            <Link to ='/'>
            <img className ="login__logo"
            src='https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg'/>
            </Link>
            <div className="login__container">
                <h1 className="login__title">
                    Sign-In
                </h1>
                <form>

                    <h5>Email(phone for mobile account)</h5>

                    <input type = 'text' value={email} onChange=
                    {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>

                    <input type = 'password' value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button type = "submit" 
                    className= "login__signIn" 
                    onCLick={signIn}>
                        Sign in
                    </button>
                </form>
                <p> 
                    By signing-in you agree to the fake amazon
                    clone Conditions of Use & Sale.
                </p>

                <button onClick={register}
                 className="login__register">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    ) 

}
export default Login;
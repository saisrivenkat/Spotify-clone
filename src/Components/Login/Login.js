import React from 'react'
import './Login.css'
import { login } from './LoginEndPoint'
const Login = ({setcurrentstate}) => {
    const ChangeState=()=>{
        setcurrentstate('youtube');
    }
    return (
        <div className="login text-center">
            <img
                src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                alt="Spotify logo"
            />
            <h3 className="text-white mb-5">Want to listen Music</h3>
            <a href={login} className="" >Login</a>
            <div>
        <h1>Want Youtube</h1>
<button onClick={ChangeState}>Click here</button>
        </div>
        </div>
    )
}
export default Login

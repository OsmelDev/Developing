import React,{useId, useState} from 'react'
import style from './styles/login.module.css'

const Login = ({user, setUser, password, setPassword, isLogin, setIsLogin}) => {

const loginId=useId();




function handleSubmit(e){
	e.preventDefault();
}
function handleRegister(){
	let data = {
		username: user,
		password: password
	}
	localStorage.setItem('user', JSON.stringify(data))
	setIsLogin(true)
	setUser('')
}
function handleLogout(){
	setIsLogin(false)
}
	return (
		<div>
			<div>
			{
				isLogin? 
				<label onClick={()=>handleLogout()} >
					<span>
						Log-out
					</span>
				</label> :
				<label htmlFor={loginId} className={style.loginButton}>
					<span>
       	 		Hello, sign in <br />
       			Acconunt & List
      		</span>
				</label>

			}
				<input type="checkbox" id={loginId} hidden/>

				
				

				<form onSubmit={handleSubmit} className={style.formLogin}>
				<div className={style.formLoginContainer}>
					<label >User</label>
				  <input type='text' value={user} placeholder='username' onChange={(event)=> setUser(event.target.value)}/>
				  <label >Password</label>
				  <input type="password" value={password} placeholder='password' onChange={(event)=> setPassword(event.target.value)}/>
				</div>
				<button onClick={()=> handleRegister()}>
					submit
				</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FacebookLoginButton, TwitterLoginButton, LinkedInLoginButton } from 'react-social-login-buttons';

class Login extends Component {
    render() {
        return (
            <div style={{background: 'url(https://www.underconsideration.com/brandnew/archives/nba_logo_before_after.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: '730px', position: 'relative'}}>
                <div className="container contain_login">
            <form className="login">
            <h1 className="log"><span className="log">LOGIN</span>
            </h1>
            <h2 className="text-center">Welcome Back</h2>
           
                <label className="hi">Email<i class="fas fa-envelope"></i></label>
                <input type="email" placeholder="Email" required/>
      
                <label className="hi">Password<i class="fas fa-lock"></i></label>
                <input type="password" placeholder="Password" required/>
         
            <button className="btn-lg btn-dark btn-block"><a href="/Products">Log In</a>
            </button>
            <div className="text-center pt-3"><b>Or Log In with your social media accounts:</b></div>
            <FacebookLoginButton className="mt-3 mb-3"/>
            <TwitterLoginButton className="mt-3 mb-3"/>
            <LinkedInLoginButton className="mt-3 mb-3"/>
            <div className="text-center">
                <Link to="/SignUp">Sign Up</Link>
                <span className="p-2">|</span>
                <Link to="/">Forgot Password?</Link>
            </div>
            </form>
                </div>
            </div>
        )
    }
}

export default Login;
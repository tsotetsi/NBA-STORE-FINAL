import React, { Component } from 'react';

class Sign extends Component {
    render() {
        return (
            <div style={{background: 'url(https://cdn.clipart.email/7d3fe0e764b3bfc47189007e316167b5_nba-logo-logodix_1000-416.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: '730px', position: 'relative'}}>
              <div className="container contain_signup">
            <form className="login">
            <h1 className="log"><span className="log">SIGN UP</span>
            </h1>
            <h2 className="text-center">Welcome</h2>
            <form>
                <label className="hi">Name<i class="fas fa-user"></i></label>
                <input type="text" placeholder="Enter Name" required/>
            </form>
            <form>
                <label className="hi">Surname<i class="fas fa-user-circle"></i></label>
                <input type="text" placeholder="Enter Surname" required/>
            </form>
            <form>
                <label className="hi">Phone Number<i class="fas fa-phone"></i></label>
                <input type="number" placeholder="Enter Phone Number" required/>
            </form>
            <form>
                <label className="hi">Email<i class="fas fa-envelope"></i></label>
                <input type="email" placeholder="Enter Email" required/>
            </form>
            <form>
                <label className="hi">Password<i class="fas fa-lock"></i></label>
                <input type="password" placeholder="Enter Password" required/>
            </form>
            <button className="btn blue text-white">Sign In<a href="/Products">Sign In</a>
            </button>
            </form>
              </div>
            </div>
        )
    }
}

export default Sign;
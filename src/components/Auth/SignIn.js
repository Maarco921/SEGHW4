import { Button} from 'react-bootstrap';
import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.email == "admin" && this.state.password == "1234"){
            this.props.history.push('/CreatePost');
        }else{
            alert("Incorrect email and password. That's all I can tell you.");
        }
      }
    render() {
        return (
        <div>
        <div class="container vertical-center">
            <form onSubmit={this.handleSubmit} action="action_page.php">
                <h1>Sign In</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name="email" required onChange={this.handleChange}></input>
                </div>

                <div className="input-field">
                    <label htmlFor="psw">Password</label>
                    <input type="password" id='password' name="psw" required onChange={this.handleChange}></input>
                </div>

                <p>By creating an account you agree to our Term and Conditions.</p>

                <div class="clearfix"></div>

                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                </div>
                <button  className="btn black lighten-1 z-depth-0" href="/" variant="primary" size="sm" block>
                    Cancel
                </button>
                
            </form>
           
            <br></br>
  
        </div>
        </div>
        )
    }
}

export default SignIn
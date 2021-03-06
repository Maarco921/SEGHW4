import { Button} from 'react-bootstrap';
import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: ''

    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.password == this.state.passwordRepeat){
            this.props.history.push('/CreatePost');
        }else{
            alert("Unfortunately, both password don't match. You'll have to try again");
        }
      }
    render() {
        return (
        <div>
        <div class="container vertical-center">
            <form onSubmit={this.handleSubmit} action="action_page.php">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                
                <div  className="input-field form-textarea">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' required onChange={this.handleChange} />
                </div>

                <div className="input-field form-textarea">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' required onChange={this.handleChange} />
                </div>

                <div className="input-field form-textarea" >
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name="email" required onChange={this.handleChange}></input>
                </div>

                <div className="input-field form-textarea">
                    <label htmlFor="psw">Password</label>
                    <input type="password" id='password' name="psw" required onChange={this.handleChange}></input>
                </div>

                <div className="input-field form-textarea">
                    <label htmlFor="passwordRepeat">Repeat Password</label>
                    <input type="password" id='passwordRepeat' name="passwordRepeat" required onChange={this.handleChange}></input>
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
           

        </div>
        </div>
        )
    }
}

export default SignUp
import React from 'react'
import { Button} from 'react-bootstrap';


const Login = () => {
  return (
    <div>
      <div class="container vertical-center">
        <h4 class="center ">Login Page</h4>
        <Button href="/SignUp" variant="primary" size="lg" block>
            Create Account
        </Button>
        <br></br>
        <Button href="/SignIn" variant="primary" size="lg" block>
            Sign in
        </Button>
      </div>
    </div>
  )
}

export default Login
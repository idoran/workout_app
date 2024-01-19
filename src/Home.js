import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        username: '',
        password: '',
        erorrMsg: ''
    }
  }
  handleLogin = (e) =>{
    e.preventDefault()


    const {username, password} = this.state

    if (username === 'user' && password === 'password'){
      //succesful login attempt
      this.setState({error: ''})
    }else{
      this.setState({error: 'Invalid username or password'})
    }

  }

  render() {
    const {username, password, error} = this.state
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleLogin}>
          <div>
              <label>Username:</label>
              <input
                type='text'
                value={username}
                onChange={(e) => this.setState({username: e.target.value})}
              
              />
          </div>
          <div>
              <label>Password:</label>
              <input
                type='password'
                value={password}
                onChange={(e) => this.setState({password: e.target.value})}
              
              />
          </div>
          {error && <div style={{color: 'red'}}>{error}</div>}
          <button type="submit">Login</button>
        </form>


      </div>

    )
  }
}

export default Home

import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/Home/HomePage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  componentDidMount(){
    return this.props.loginStatus ? this.redirect() : null
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = (data) => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

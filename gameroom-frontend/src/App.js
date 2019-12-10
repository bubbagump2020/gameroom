import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login';
import { UserHome } from './components/User/UserHome'


function App() {
  return (
    <div className="App">
    	<BrowserRouter>
    		<Route exact path='/' component={Login} />
    		<Route exact path='/' component={SignUp} />
        <Route exact path='/users/:id' component={UserHome} />
    	</BrowserRouter>
    </div>
  );
}

export default App;

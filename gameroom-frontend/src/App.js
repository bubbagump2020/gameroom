import React from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login';
import { UserHome } from './components/User/UserHome'
import { NewCharacterForm } from './components/Character/NewCharacterForm'
import { CharacterCollection } from './components/Character/CharacterCollection';

function App() {
  return (
    	<BrowserRouter>
    		<Route exact path='/' component={Login} />
    		<Route exact path='/' component={SignUp} />
        <Route exact path='/users/:id' component={UserHome} />
        <Route exact path='/users/:id/characters' component={CharacterCollection}/>
    	</BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import { HomePage, Login } from './components/HomePage'
import { UserHome } from './components/User/UserHome'
import { CharacterCollection } from './components/Character/CharacterCollection'
import { NewCharacterForm, EditCharacterForm } from './components/Character/CharacterForms'


function App() {
  return (
    <Container fluid>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users/:id" component={UserHome} />
        <Route exact path="/users/:id/characters" component={CharacterCollection} />
        <Route exact path="/users/:id/characters/new" component={NewCharacterForm} />
      </Switch>
    </Container>
  );
}

export default App;

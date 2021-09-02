import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'
import Lesson from './Pages/Lesson'
import Call from './Pages/Call'
import Calendar from './Pages/Calendar'
import Avaliador from './Pages/Avaliador'
import Gravar from './Pages/Gravar'
import Visualizar from './Pages/Visualizar'
import Nova from './Pages/Nova'
import Minicex from './Pages/Minicex'

import './App.css';

function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/lesson' component={Lesson} />
      <Route path='/call' component={Call} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/avaliador' component={Avaliador} />
      <Route path='/gravar' component={Gravar} />
      <Route path='/visualizar' component={Visualizar} />
      <Route path='/nova' component={Nova} />
      <Route path='/minicex' component={Minicex} />
    </Switch>
    </>
  );
}

export default App;

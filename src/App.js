import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import PatternIndex from './components/patterns/PatternIndex'
import PatternShow from './components/patterns/PatternShow'
import PatternNew from './components/patterns/PatternNew'
import CommentsForm from './components/patterns/CommentsForm'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/patterns/new">
          <PatternNew />
        </Route>
        <Route path="/patterns/:patternID/comments">
          <CommentsForm />
        </Route>
        <Route path="/patterns/:patternID">
          <PatternShow />
        </Route>
        <Route path="/patterns">
          <PatternIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )



}

export default App

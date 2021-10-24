import React from 'react'

// @packages
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// @pages
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

import React from 'react'
import { Route, Link } from 'react-router-dom'
import LeagueOfLegends from '../leagueOfLegends'
import Home from '../home'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/league-of-legends" component={LeagueOfLegends} />
    </main>
  </div>
)

export default App

import React from 'react'
import {
} from 'reactstrap'

import './App.scss'

import { CharactersProvider, } from './characters.service'

import Header from './Header'
import Layout from './Layout'

class App extends React.Component {
  render() {
    return <CharactersProvider>
      <div className="App pb-4">
        <Header />
        <Layout />
      </div>
    </CharactersProvider>
  }
}

export default App;

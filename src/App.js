import React from 'react'
import { IntlProvider } from 'react-intl'
import locales from './locales'
import {
} from 'reactstrap'

import './App.scss'

import Header from './Header'
import Layout from './Layout'

class App extends React.Component {
  render() {
    let locale = window.navigator.language.slice(0, 2)
    if (!locales[locale]) { locale = 'en' }

    return <IntlProvider locale={locale} messages={locales[locale]}>
      <div className="App pb-4">
        <Header />
        <Layout />
      </div>
    </IntlProvider>
  }
}

export default App;

import React from 'react'
import { IntlProvider } from 'react-intl'
import { Router } from "@reach/router"
import locales from './locales'
import {
} from 'reactstrap'

import { AppContext } from './app.context'

import './App.scss'

// import Header from './Header'
import Layout from './Layout'

const App = () => {
  const locale = React.useMemo(() => {
    const navLocale = window.navigator.language.slice(0, 2)
    return locales[navLocale] ? navLocale : 'en'
  }, [])

  return (
    <IntlProvider locale={locale} messages={locales[locale]}>
      <AppContext.Provider value={{}}>
        <Router>
          <Layout path="/" />
        </Router>
      </AppContext.Provider>
    </IntlProvider>
  )
}

export default App;

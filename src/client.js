import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './components/App'
import theme from './theme'

function Main () {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-styles')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

hydrate(<Main />, document.querySelector('#root'))

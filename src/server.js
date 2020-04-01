import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import reload from 'reload'
import App from './components/App'
import theme from './theme'

const app = express()
const isDev = process.env.NODE_ENV === 'development'

const port = 3000
app.use(express.static('public'))

if (isDev) {
  reload(app)
}

app.use((req, res) => {
  const sheets = new ServerStyleSheets()

  const html = renderToString(sheets.collect(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  ))

  const css = sheets.toString()

  res.send(`
  <!DOCTYPE html>
  <html lang='en'>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <title>React App</title>
    <style id='jss-styles'>${css}</style>
  </head>
  
  <body>
      <div id='root'>${html}</div>
      <script src='main.js' async></script>
      ${isDev ? '<script src="/reload/reload.js" async></script>' : ''}
  </body>
  
  </html>
`)
})

app.listen(port, () => console.log(`http://localhost:${port}`))

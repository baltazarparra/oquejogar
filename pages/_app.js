import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #BFC3CD;
    display: block;
    height: 100%;
    max-width: 728px;
    margin: 0 auto;
    padding: 0;
  }

  body {
    padding: 1rem;
    margin-top: 0;
    font-family: 'Roboto Mono', monospace;
  }
`

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

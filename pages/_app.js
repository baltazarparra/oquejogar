import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #121212;
    --gray: #1e1e1e;
    --silver: #9c9c9c;
    --white: #e3e3e3;
  }

  html {
    background-color: var(--black);
    color: var(--silver);
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
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

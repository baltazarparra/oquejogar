import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #BFC3CD;
    color: #192534;
    font-family: 'Roboto Mono', monospace;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  article {
    flex: 2;
    max-width: 50%;
    background-image: url("/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin: 1em;

    @media (max-width: 1024px) {
      display: none;
    }
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

import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components'
import Analytics from '../components/Analytics'

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

  a {
    color: #e3e3e3;
    text-align: center;
  }

  a:visited {
    color: #9c9c9c;
  }
`

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const router = useRouter()

  const pageview = (url) => {
    window.gtag('config', 'G-5VDZTKK3P5', {
      page_path: url
    })
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  )
}

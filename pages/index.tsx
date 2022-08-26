import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>O que jogar?</title>
        <meta
          name="description"
          content="Descubra novos jogos baseado em títulos que já gosta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>O que jogar?</h1>
    </div>
  )
}

export default Home

import { getProviders, getSession, useSession } from 'next-auth/react'

import Head from 'next/head'
import Login from '../components/Login'

export default function Home({ providers }) {
  const { data: session } = useSession()

  console.log('session', session)

  if (!session) return <Login providers={providers} />

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
      <div>
        <h1>O que jogar?</h1>
        <img src={session.user.image} alt={session.user.name} />
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      providers,
      session
    }
  }
}

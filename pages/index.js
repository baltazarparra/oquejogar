import { useState, useEffect } from 'react'
import { getProviders, getSession, useSession } from 'next-auth/react'

import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'

const fakeApi = () => console.log('Api is called')

export default function Home({ providers }) {
  const { data: session } = useSession()
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState()

  console.log('session', session)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 800)

    return () => clearTimeout(timer)
  }, [inputValue])

  if (!session) return <Login providers={providers} />

  console.log('inputValue', inputValue)

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
        <h1>Adicionar Jogos</h1>
        <Image
          width="100px"
          height="100px"
          src={session.user.image}
          alt={session.user.name}
        />
        <div>
          <input
            placeholder="Procurar jogos"
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {searchTerm && <p>{searchTerm}</p>}
        </div>
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

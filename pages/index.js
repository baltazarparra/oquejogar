import { useState, useEffect } from 'react'
import { getProviders, getSession, useSession } from 'next-auth/react'
import firebaseApp from '../firebaseApp'

import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'

const db = firebaseApp.firestore()

export default function Home({ providers }) {
  const { data: session } = useSession()
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState()
  const [games, setGames] = useState()
  const [posts, setPosts] = useState()
  const [refetch, setRefetch] = useState(false)

  const fetchPosts = async () => {
    const response = db.collection(session?.user.uid)
    const data = await response.get()
    setPosts(data)
  }

  useEffect(() => {
    setRefetch(false)
  }, [])

  useEffect(() => {
    if (session) fetchPosts()
  }, [session, refetch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 800)

    return () => clearTimeout(timer)
  }, [inputValue])

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://rawg.io/api/games?search=${searchTerm}&page_size=20&page=1&key=458263303ecd4ab5b91d155ef78bcdcb`
      )
        .then((res) => res.json())
        .then((data) => {
          setGames(data.results)
        })
    }
  }, [searchTerm])

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
        <h1>Adicionar Jogos</h1>
        {posts &&
          posts.docs.map((doc) => (
            <div key={doc.id}>{JSON.stringify(doc.data().game.name)}, </div>
          ))}
        <Image
          width="100px"
          height="100px"
          src={session?.user.image}
          alt={session?.user.name}
        />
        <div>
          <input
            placeholder="Procurar jogos"
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
      {games &&
        games.map((game) => (
          <div key={game.id}>
            <p>{game.name}</p>
            <button
              onClick={() => {
                setRefetch(true)
                db.collection(session.user.uid).doc(game.slug).set({
                  game
                })
              }}
            >
              Add
            </button>
            {game.background_image && (
              <Image
                width="160"
                height="100"
                src={game.background_image}
                alt={session.user.name}
              />
            )}
          </div>
        ))}
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

import { useState, useEffect } from 'react'
import { getProviders, getSession, useSession, signOut } from 'next-auth/react'
import firebaseApp from '../firebaseApp'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'

import * as S from '../styles'

const db = firebaseApp.firestore()

export default function Home({ providers }) {
  const { data: session } = useSession()
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState()
  const [games, setGames] = useState()
  const [list, setList] = useState()
  const [slug, setSlug] = useState()
  const [refetch, setRefetch] = useState()

  const fetchGames = async () => {
    const response = slug && db.collection(slug)
    const data = await response?.get()
    setList(data)
  }

  useEffect(() => {
    setRefetch(!refetch)
  }, [])

  useEffect(() => {
    if (session) {
      const raw = `${session.user.tag
        .split(' ')
        .join('')}${session.user.uid.substring(0, 3)}`
      setSlug(raw)
    }
  }, [session])

  useEffect(() => {
    if (session) fetchGames()
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
    <S.Main>
      <Head>
        <title>O que jogar?</title>
        <meta
          name="description"
          content="Descubra novos jogos baseado em títulos que já gosta"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        />
      </Head>
      <div>
        <S.Header>
          {session.user.uid && (
            <>
              <S.Link onClick={() => signOut()}>Sair</S.Link>
              <section>
                <Link href={`/${slug}`} passHref>
                  <S.Username>{session?.user.name}</S.Username>
                </Link>
                <Image
                  width="34px"
                  height="34px"
                  src={session?.user.image}
                  alt={session?.user.name}
                />
              </section>
            </>
          )}
        </S.Header>
        <S.Container>
          <div>
            <S.Title>Busque seus jogos favoritos para montar sua lista</S.Title>
            {list && (
              <S.List>
                {list.docs.map((doc) => (
                  <li
                    key={doc.id}
                    style={{
                      backgroundImage: `url(${
                        doc.data().game.background_image
                      })`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: '80px',
                      listStyle: 'none',
                      lineHeight: '1.8',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      marginLeft: '-10px',
                      marginBottom: '10px',
                      width: '60px',
                      borderRadius: '6px',
                      border: 'solid 2px white'
                    }}
                  ></li>
                ))}
              </S.List>
            )}
            <div>
              <S.Search
                placeholder="Procurar seus jogos..."
                value={inputValue}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            {games && inputValue && (
              <S.Results>
                {games.map((game) => (
                  <S.Card
                    onClick={() => {
                      setRefetch(!refetch)
                      setInputValue('')
                      db.collection(slug).doc(game.slug).set({
                        game
                      })
                    }}
                    key={game.id}
                  >
                    {game.background_image && (
                      <Image
                        width="160"
                        height="100"
                        src={game.background_image}
                        alt={session.user.name}
                      />
                    )}
                    <p>{game.name}</p>
                    <button>Adicionar</button>
                  </S.Card>
                ))}
              </S.Results>
            )}
          </div>
          <S.Outer>
            {list?.docs.length > 0 && (
              <Link href={`/${slug}`}>
                <S.Button>Ver minha lista</S.Button>
              </Link>
            )}
            <S.Footer>
              <S.Baltz
                href="https://baltazarparra.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                © 2022 Baltazar Parra.
              </S.Baltz>
            </S.Footer>
          </S.Outer>
        </S.Container>
      </div>
    </S.Main>
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

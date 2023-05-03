import { useState, useEffect } from 'react'
import { getProviders, getSession, useSession, signOut } from 'next-auth/react'
import firebaseApp from '../firebaseApp'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'

import * as S from '../styles'

import { ThreeDots } from 'react-loader-spinner'

const db = firebaseApp.firestore()

export default function Home({ providers }) {
  const { data: session } = useSession()
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState()
  const [games, setGames] = useState()
  const [list, setList] = useState()
  const [slugs, setSlugs] = useState()
  const [refetch, setRefetch] = useState()
  const [loading, setLoading] = useState(false)

  const fetchGames = async () => {
    const response = slugs && db.collection(slugs)
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
      setSlugs(raw)
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
      setLoading(true)
      fetch(
        `https://rawg.io/api/games?search=${searchTerm}&page_size=20&page=1&key=458263303ecd4ab5b91d155ef78bcdcb`
      )
        .then((res) => res.json())
        .then((data) => {
          setGames(data.results)
          setLoading(false)
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
                <Link href={`/${slugs}`} passHref>
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
            {list ? (
              <S.List>
                <li>
                  {list.docs.length > 0 ? (
                    <Link href={`/${slugs}`}>Sua lista: </Link>
                  ) : (
                    <>
                      <S.Small>Você ainda não adicionou jogos</S.Small>
                      <Image
                        alt="playstation"
                        width="320px"
                        height="250px"
                        src="/../public/game.gif"
                      />
                    </>
                  )}
                </li>
                {list.docs.map((doc) => (
                  <li key={doc.id}>
                    <p>{doc.data().game.name}</p>
                  </li>
                ))}
              </S.List>
            ) : (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#9c9c9c"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: 'block', textAlign: 'center' }}
                wrapperClassName=""
                visible={true}
              />
            )}
            <div>
              <S.Search
                placeholder="Procurar seus jogos..."
                value={inputValue}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            {games ? (
              <S.Results>
                {games.map((game) => (
                  <S.Card
                    onClick={() => {
                      db.collection(slugs).doc(game.slug).set({
                        game
                      })
                      setRefetch(!refetch)
                      setInputValue('')
                      setGames('')
                    }}
                    key={game.id}
                  >
                    {game.background_image && (
                      <Image
                        width="100"
                        height="90"
                        src={game.background_image}
                        alt={session.user.name}
                      />
                    )}
                    <S.Infos>
                      <p>{game.name}</p>
                      <S.Genres>
                        {game.genres.map((item) => {
                          return <S.Tag key={item.name}>{item.name}</S.Tag>
                        })}
                      </S.Genres>
                      <S.Platforms>
                        {game.parent_platforms?.map((videogame) => (
                          <Image
                            width="20px"
                            height="20px"
                            key={videogame.platform.id}
                            src={`/${videogame.platform.slug}.svg`}
                            alt={videogame.platform.name}
                          />
                        ))}
                      </S.Platforms>
                    </S.Infos>
                    <S.Add>Adicionar</S.Add>
                  </S.Card>
                ))}
              </S.Results>
            ) : (
              loading && (
                <ThreeDots
                  height="40"
                  width="40"
                  radius="9"
                  color="#9c9c9c"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ display: 'block', textAlign: 'center' }}
                  wrapperClassName=""
                  visible={true}
                />
              )
            )}
          </div>
          <S.Outer>
            {list?.docs.length > 0 && (
              <Link href={`/${slugs}`}>
                <S.Button>Ver minha lista</S.Button>
              </Link>
            )}
            <S.Footer>
              <S.Baltz
                href="https://baltazarparra.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                © Baltazar Parra <small>v0.2.0</small>
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

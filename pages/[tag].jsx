import { useEffect, useState } from 'react'

import firebaseApp from '../firebaseApp'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import * as S from '../styles'

import { RWebShare } from 'react-web-share'

import { ThreeDots } from 'react-loader-spinner'

const db = firebaseApp.firestore()

export default function PostPage() {
  const { data: session } = useSession()
  const [list, setList] = useState()
  const [recommendation, setRecommendation] = useState()
  const [title, setTitle] = useState()
  const [name, setName] = useState()
  const [load, setLoad] = useState()
  const router = useRouter()

  useEffect(() => {
    db.collection(router.query.tag).onSnapshot((onSnapshot) => {
      const items = []
      onSnapshot.forEach(function (doc) {
        items.push(doc.data())
      })
      setList(items)
    })
  }, [router.query.tag])

  useEffect(() => {
    if (title) {
      setLoad(true)
      fetch(
        `https://rawg.io/api/games/${title}/suggested?page=1&page_size=8&key=c542e67aec3a4340908f9de9e86038af`
      )
        .then((response) => response.json())
        .then((data) => setRecommendation(data.results))
        .then(() => setLoad(false))
    }
  }, [title])

  return (
    <S.Main>
      <Head>
        <title>{router.query.tag}</title>
        <meta
          name="description"
          content="Descubra novos jogos baseado em títulos que já gosta"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        />
      </Head>
      {session?.user.uid && (
        <S.Header>
          <>
            <Link href="/">
              <S.Link>Adicionar jogos</S.Link>
            </Link>

            <section>
              <Link href={`/`} passHref>
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
        </S.Header>
      )}
      <S.Container>
        <div>
          <S.Title>
            Jogos favoritos de {router.query.tag.replace(/[0-9]/g, '')}
          </S.Title>
          {list?.length > 0 ? (
            <S.Results>
              {list.map((item) => (
                <S.Poster
                  key={item.game.id}
                  onClick={() => {
                    setTitle(item.game.slug)
                    setName(item.game.name)
                  }}
                >
                  {item.game.background_image && (
                    <Image
                      width="100"
                      height="90"
                      src={item.game.background_image}
                      alt={session?.user.name}
                    />
                  )}
                  <S.Infos>
                    <p>{item.game.name}</p>
                    <S.Genres>
                      {item.game.genres?.map((item) => {
                        return <S.Tag key={item.id}>{item.name}</S.Tag>
                      })}
                    </S.Genres>
                    <S.Platforms>
                      {item.game.parent_platforms?.map((videogame) => (
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
                  <S.Add>Recomendar Jogos</S.Add>
                </S.Poster>
              ))}
            </S.Results>
          ) : list && session?.user ? (
            <S.Empty>
              <Link href="/">Clique aqui para adicionar jogos</Link>
            </S.Empty>
          ) : (
            session?.user && (
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
        {load && !recommendation && (
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
        {recommendation && session?.user ? (
          load ? (
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
          ) : (
            <S.Reccomended>
              <S.Title>Jogos parecidos com {name}</S.Title>
              <S.ResultsRecomend>
                {recommendation.map((item) => (
                  <Link
                    passHref
                    key={item.id}
                    href={`https://www.youtube.com/results?search_query=${item.name}+gameplay+official`}
                  >
                    <S.Reccomend target="_blank">
                      {item.background_image && (
                        <Image
                          width="100"
                          height="90"
                          src={item.background_image}
                          alt={session?.user.name}
                        />
                      )}
                      <S.Infos>
                        <p>{item.name}</p>
                        <S.Genres>
                          {item.genres?.map((item) => {
                            return <S.Tag key={item.id}>{item.name}</S.Tag>
                          })}
                        </S.Genres>
                        <S.Platforms>
                          {item.parent_platforms?.map((videogame) => (
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
                      <S.Add>Ver gameplay</S.Add>
                    </S.Reccomend>
                  </Link>
                ))}
              </S.ResultsRecomend>
              <S.Back
                style={{ margin: '-6px auto 20px auto' }}
                onClick={() => {
                  setRecommendation()
                  setTitle()
                }}
              >
                Voltar
              </S.Back>
            </S.Reccomended>
          )
        ) : (
          !session?.user &&
          recommendation && (
            <Link href={`/`}>
              Você precisa estar logado para ver as recomendações, clique aqui
            </Link>
          )
        )}
        <S.Outer>
          {session?.user ? (
            list?.length > 0 && (
              <RWebShare
                data={{
                  text: 'Meus jogos favoritos',
                  url: `https://oquejogar.com/${router.query.tag}`,
                  title: 'oquejogar.com'
                }}
              >
                <S.Button>Compartilhar</S.Button>
              </RWebShare>
            )
          ) : (
            <Link href={`/`}>
              <S.Button>Criar minha lista</S.Button>
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
    </S.Main>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}
  }
}

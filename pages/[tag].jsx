import { useEffect, useState } from 'react'

import firebaseApp from '../firebaseApp'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import * as S from '../styles'

import { RWebShare } from 'react-web-share'

const db = firebaseApp.firestore()

export default function PostPage() {
  const { data: session } = useSession()
  const [list, setList] = useState()
  const router = useRouter()

  console.log(list)

  useEffect(() => {
    db.collection(router.query.tag).onSnapshot((onSnapshot) => {
      const items = []
      onSnapshot.forEach(function (doc) {
        items.push(doc.data())
      })
      setList(items)
    })
  }, [router.query.tag])

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
      <S.Header>
        {session?.user.uid && (
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
        )}
      </S.Header>
      <S.Container>
        <div>
          <S.Title>
            Jogos favoritos de {router.query.tag.replace(/[0-9]/g, '')}
          </S.Title>
          {list && (
            <S.Results>
              {list.map((item) => (
                <S.Card key={item.game.id}>
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
                        <img
                          key={videogame.platform.id}
                          src={`/${videogame.platform.slug}.svg`}
                          alt={videogame.platform.name}
                        />
                      ))}
                    </S.Platforms>
                  </S.Infos>
                </S.Card>
              ))}
            </S.Results>
          )}
        </div>
        <S.Outer>
          {session?.user ? (
            <RWebShare
              data={{
                text: 'Meus jogos favoritos',
                url: `https://oquejogar.com/${router.query.tag}`,
                title: 'oquejogar.com'
              }}
            >
              <S.Button>Compartilhar</S.Button>
            </RWebShare>
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
              © 2022 Baltazar Parra.
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

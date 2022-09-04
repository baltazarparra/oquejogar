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
      <S.Title>
        Jogos favoritos de {router.query.tag.replace(/[0-9]/g, '')}
      </S.Title>
      {list && (
        <S.Results>
          {list.map((item) => (
            <S.Card key={item.game.id}>
              <Image
                width="160"
                height="100"
                src={item.game.background_image}
                alt={item.game.name}
              />
              <p>{item.game.name}</p>
            </S.Card>
          ))}
        </S.Results>
      )}
      {session?.user ? (
        <S.Anchor>
          <RWebShare
            data={{
              text: 'Meus jogos favoritos',
              url: `https://oquejogar.com/${router.query.tag}`,
              title: 'oquejogar.com'
            }}
          >
            <span>Compartilhar</span>
          </RWebShare>
        </S.Anchor>
      ) : (
        <S.Anchor href="/">Criar minha lista</S.Anchor>
      )}
    </S.Main>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}
  }
}

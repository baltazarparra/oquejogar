import { useEffect, useState } from 'react'

import firebaseApp from '../../firebaseApp'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import * as S from '../../styles'

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
        <title>Gamer: {router.query.tag}</title>
        <meta
          name="description"
          content="Descubra novos jogos baseado em títulos que já gosta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Header>
        {session?.user.uid && (
          <>
            <Link href="/">
              <button>Adicionar mais jogos</button>
            </Link>

            <section>
              <Link href={`/`}>
                <a>{session?.user.name}</a>
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
      <S.Title>Já joguei</S.Title>
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
      <S.Anchor>
        <RWebShare
          data={{
            text: 'Meus jogos favoritos',
            url: `https://oquejogar.com/user/${router.query.tag}`,
            title: 'oquejogar.com'
          }}
        >
          <span>Compartilhar</span>
        </RWebShare>
      </S.Anchor>
    </S.Main>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}
  }
}

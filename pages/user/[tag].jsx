import { useEffect, useState } from 'react'

import firebaseApp from '../../firebaseApp'
import { useRouter } from 'next/router'

import Link from 'next/link'

const db = firebaseApp.firestore()

export default function PostPage() {
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
  }, [])

  console.log(list)

  return (
    <>
      {list && list.map((item) => <h1 key={item.game.id}>{item.game.name}</h1>)}
      <Link href="/">
        <a>back</a>
      </Link>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}
  }
}

import { signIn } from 'next-auth/react'
import React from 'react'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;

  section {
    flex: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0 20px;

    @media (max-width: 800px) {
      flex-direction: column;
      position: relative;
    }

    p {
      padding: 0 20px;
      margin: 0 auto 20px;
      max-width: 420px;
    }
  }
`

const Login = ({ providers }) => {
  return (
    <Main>
      <section>
        <h1>oquejogar.com</h1>
        <p>
          Lista personalizada com seus jogos favoritos e recomendações de novos
          jogos, baseado em títulos que já curte
        </p>
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                <div>Entrar com {provider.name}</div>
              </button>
            </div>
          )
        })}
      </section>
      <article></article>
    </Main>
  )
}

export default Login

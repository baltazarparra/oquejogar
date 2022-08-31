import { signIn } from 'next-auth/react'
import React from 'react'
import styled from 'styled-components'

import G from '../public/g.svg'

import AnimatedTextWord from './AnimatedTextWord'
import AnimatedText from './AnimatedText'

export const Main = styled.main`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  section {
    flex: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0 20px;

    p {
      padding: 0 20px;
      margin: 0 auto 20px;
      max-width: 420px;
    }

    button {
      display: flex;
      align-items: center;
      font-family: inherit;
      font-size: 16px;
      padding: 10px;
      border-radius: 3px;
      border: solid 1px #192534;
      cursor: pointer;
      svg {
        margin-right: 10px;
      }
    }

    h1 {
      font-size: 42px;
      font-weight: bold;
    }
  }
`

const Login = ({ providers }) => {
  return (
    <Main>
      <section>
        <h1>
          <div>
            <AnimatedTextWord text="o que jogar ?" />
          </div>
        </h1>
        <div>
          <AnimatedText
            text="Lista personalizada com seus jogos favoritos e recomendações de novos
          jogos, baseado em títulos que já curte"
          />
        </div>
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                <G />
                Entrar com {provider.name}
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

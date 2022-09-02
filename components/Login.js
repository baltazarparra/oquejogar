import { signIn } from 'next-auth/react'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Head from 'next/head'

import G from '../public/g.svg'

import AnimatedTextWord from './AnimatedTextWord'
import AnimatedText from './AnimatedText'

const scrolling = keyframes`
	100% {
		background-position: -100% 0;
	}
`

export const Marq = styled.b`
  background-image: url('/brands.png');
  position: fixed;
  height: 200%;
  width: 32px;
  background-size: 32px;
  background-position: 0 50%;
  background-repeat: repeat-y;
  animation: ${scrolling} 60s linear infinite;
  transform: rotate(45deg);
  top: -100%;
  left: 110px;
  transition: 0.3s;

  &:hover {
    animation: ${scrolling} 1s linear infinite;
    transform: rotate(45deg) scale(1.6);
  }
`

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

    @media (max-width: 1024px) {
      justify-content: flex-start;
      margin-top: 150px;
    }

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
  em {
    position: fixed;
    bottom: 6px;
    left: 6px;
    font-size: 12px;
    a {
      text-decoration: none;
      color: #192534;
    }
  }
`

const Login = ({ providers }) => {
  return (
    <>
      <Head>
        <title>O que jogar?</title>
        <meta
          name="description"
          content="Descubra novos jogos baseado em títulos que já gosta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Marq></Marq>
      <Main>
        <section>
          <div>
            <AnimatedTextWord text="o que jogar ?" />
          </div>
          <div>
            <AnimatedText
              text="Lista personalizada com seus jogos favoritos e recomendações de novos
          jogos, baseado em títulos que já curte"
            />
          </div>
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  <G />
                  Entrar com {provider.name}
                </button>
              </div>
            )
          })}
        </section>
        <article></article>
        <em>
          <a
            href="https://baltazarparra.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            @baltazarparra
          </a>
        </em>
      </Main>
    </>
  )
}

export default Login

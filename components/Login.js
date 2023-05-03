import React from 'react'

import { signIn } from 'next-auth/react'
import Head from 'next/head'

import G from '../public/g.svg'

import AnimatedTextWord from '../motion/AnimatedTextWord'
import AnimatedText from '../motion/AnimatedText'

import * as S from './styles'

const Login = ({ providers }) => {
  return (
    <>
      <Head>
        <title>oquejogar?</title>
        <meta
          name="description"
          content="Descubra novos jogos baseado em títulos que já gosta"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        />
      </Head>
      <S.Marquee></S.Marquee>
      <S.Main>
        <S.Box>
          <S.Inner>
            <div>
              <AnimatedTextWord text="o que jogar . com" />
            </div>
            <div>
              <AnimatedText text="Crie uma lista com seus jogos favoritos e receba recomendações de novos jogos" />
            </div>
            {Object.values(providers).map((provider) => {
              return (
                <div key={provider.name}>
                  <S.Button
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  >
                    <G />
                    Entrar com {provider.name}
                  </S.Button>
                </div>
              )
            })}
          </S.Inner>
          <S.Footer>
            <S.Baltz
              href="https://baltazarparra.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              © Baltazar Parra <small>v0.2.0</small>
            </S.Baltz>
          </S.Footer>
        </S.Box>
        <S.Hero></S.Hero>
      </S.Main>
    </>
  )
}

export default Login

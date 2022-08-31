import { signIn } from 'next-auth/react'
import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
  color: red;
`

const Login = ({ providers }) => {
  return (
    <div>
      <h1>oquejogar.com</h1>
      <p>
        Lista personalizada com seus jogos favoritos e recomendações de novos
        jogos, baseado em títulos que já curte
      </p>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
              <Title>Entrar com {provider.name}</Title>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Login

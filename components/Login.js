import { signIn } from 'next-auth/react'
import React from 'react'

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
              <span>Entrar com {provider.name}</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Login

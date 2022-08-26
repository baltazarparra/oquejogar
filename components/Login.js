import { signIn } from 'next-auth/react'
import React from 'react'

const Login = ({ providers }) => {
  return (
    <div>
      <div>
        {Object.values(providers).map((provider) => {
          console.log('provider', provider)
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                <span>Sign in with {provider.name}</span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Login

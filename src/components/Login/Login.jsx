import React from 'react'

// Router
import { Link } from 'react-router-dom'

import { useState } from 'react'  
import styles from './styles.module.css'

const Login = () => {

  const [usarname, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    alert("Enviando os dados: " + usarname + " - " + password)
  }

  return (
    <section id='center'>
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>

        <div className={styles.inputField}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.inputField}>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.recallForget}>
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>

          <a href="#">Esqueceu a senha?</a>
        </div>

        <div>
          <button type="submit">Entrar</button>

          <div className={styles.signupLink}>
            <p>
              Não tem uma conta? <a href="#">Registre-se</a>
            </p>
          </div>
        </div>
      </form>
    </div>
    </section>
  )
}

export default Login
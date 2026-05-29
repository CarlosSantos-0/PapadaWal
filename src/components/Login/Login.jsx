import React from 'react'
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
    // O id="center" mudou para classe do module para não herdar lixo global
    <section className={styles.centerWrapper}>
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
            {/* Trocado para Link do react-router-dom */}
            <Link to="/recuperar-senha">Esqueceu a senha?</Link> 
          </div>

          <button type="submit">Entrar</button>

          <div className={styles.signupLink}>
            <p>
              Não tem uma conta? <Link to="/cadastro">Registre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [erro, setErro] = useState(''); 
  
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const emailAdmin = "admin@papadawal.com";
    const senhaAdmin = "admin123";

    if (username === emailAdmin && password === senhaAdmin) {
      setErro('');
      navigate('/adm');
    } else {
      setErro('Usuário ou senha incorretos.');
    }
  };

  return (
    <section className={styles.centerWrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>

          {/* Exibe a mensagem de erro em vermelho se o estado 'erro' estiver preenchido */}
          {erro && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{erro}</p>}

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
              required // Adicionei required aqui também
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.recallForget}>
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
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

export default Login;
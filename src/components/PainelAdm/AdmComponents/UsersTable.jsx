import styles from '../PaginaAdm.module.css'; 

function UsersTable() {
  const usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "Carlos", email: "carlos@email.com" },
  ];

  return (
    <div className={styles.tableContainer}>
      {/* O comentário tem que ficar aqui dentro! Substituí table-container por tableContainer */}
      <h2>Usuários</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
import styles from '../PaginaAdm.module.css'; 

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Painel Adminstrativo</h2>

      <ul>
        <li>Dashboard</li>
        <li>Usuários</li>
        <li>Pedidos</li>
        <li>Produtos</li>
        <li>Configurações</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
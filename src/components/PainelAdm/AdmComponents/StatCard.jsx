import styles from '../PaginaAdm.module.css'; 

function StatCard({ titulo, valor, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <h3>{titulo}</h3>
      <h1>{valor}</h1>
    </div>
  );
}

export default StatCard;
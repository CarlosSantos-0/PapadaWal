import styles from '../PaginaAdm.module.css'; 

import StatCard from "../AdmComponents/StatCard";
import UsersTable from "../AdmComponents/UsersTable";
import PedidosTable from "../AdmComponents/PedidosTable"; // Importando a nova tabela
import { FaUsers, FaBox, FaShoppingCart, FaDollarSign } from "react-icons/fa";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <h1>Dashboard Administrativo</h1>

      <div className={styles.cards}>
        <StatCard
          titulo="Clientes"
          valor="30"
          icon={<FaUsers />}
        />
        <StatCard
          titulo="Pedidos"
          valor="50"
          icon={<FaShoppingCart />}
        />
        <StatCard
          titulo="Produtos"
          valor="15"
          icon={<FaBox />}
        />
        <StatCard
          titulo="Faturamento"
          valor="R$ 1.800"
          icon={<FaDollarSign />}
        />
      </div>

      {/* Container para organizar as tabelas uma embaixo da outra */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '40px' }}>
         <PedidosTable />
         <UsersTable />
      </div>
    </main>
  );
}

export default Dashboard;
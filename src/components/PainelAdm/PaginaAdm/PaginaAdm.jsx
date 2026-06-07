import styles from '../PaginaAdm.module.css'; 
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../AdmComponents/Sidebar";

function PaginaAdm() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default PaginaAdm;
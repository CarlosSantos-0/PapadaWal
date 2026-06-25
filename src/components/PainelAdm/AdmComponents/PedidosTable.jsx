import { useState } from 'react';
import styles from '../PaginaAdm.module.css'; 

function PedidosTable() {
  const [pedidos, setPedidos] = useState([
    { id: 1, cliente: "Ana Silva", total: "1250.00", status: "Processando", data: "25/06/2026" },
    { id: 2, cliente: "Carlos Souza", total: "50.00", status: "Enviado", data: "25/06/2026" },
    { id: 3, cliente: "Isabela", total: "45.00", status: "Pendente", data: "26/06/2026" },
  ]);

  const handleStatusChange = (id, novoStatus) => {
    const pedidosAtualizados = pedidos.map(pedido => 
      pedido.id === id ? { ...pedido, status: novoStatus } : pedido
    );
    setPedidos(pedidosAtualizados);
  };

  const handleDelete = (id) => {
    const confirmar = window.confirm(`Tem certeza que deseja excluir permanentemente o pedido #${id}?`);
    
    if (confirmar) {
      const pedidosFiltrados = pedidos.filter(pedido => pedido.id !== id);
      setPedidos(pedidosFiltrados);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <h2>Gestão de Pedidos</h2>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Status</th>
            <th>Ações</th> 
          </tr>
        </thead>

        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>#{pedido.id}</td>
              <td>{pedido.data}</td>
              <td>{pedido.cliente}</td>
              <td>R$ {pedido.total}</td>
              <td>
                <select 
                  value={pedido.status} 
                  onChange={(e) => handleStatusChange(pedido.id, e.target.value)}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Processando">Processando</option>
                  <option value="Enviado">Enviado</option>
                  <option value="Entregue">Entregue</option>
                </select>
              </td>
              <td>
                <button 
                  onClick={() => handleDelete(pedido.id)}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PedidosTable;
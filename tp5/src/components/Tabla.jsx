const styles = {
  tabla: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  th: {
    backgroundColor: '#1e3a8a',
    color: '#fff',
    padding: '12px 16px',
    textAlign: 'left'
  },
  td: {
    padding: '12px 16px',
    borderBottom: '1px solid #e2e8f0',
  }
};

function Tabla({ alumnos }) {
  return (
    <table style={styles.tabla}>
      <thead>
        <tr>
          <th style={styles.th}>LU</th>
          <th style={styles.th}>Nombre</th>
          <th style={styles.th}>Apellido</th>
          <th style={styles.th}>E-mail</th>
          <th style={styles.th}>Curso</th>
          <th style={styles.th}>Teléfono</th>
          <th style={styles.th}>Domicilio</th>
        </tr>
      </thead>
      <tbody>
        {alumnos.map((a) => (
          <tr key={a.lu}>
            <td style={styles.td}>{a.lu}</td>
            <td style={styles.td}>{a.nombre}</td>
            <td style={styles.td}>{a.apellido}</td>
            <td style={styles.td}>{a.email}</td>
            <td style={styles.td}>{a.curso}</td>
            <td style={styles.td}>{a.telefono}</td>
            <td style={styles.td}>{a.domicilio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;

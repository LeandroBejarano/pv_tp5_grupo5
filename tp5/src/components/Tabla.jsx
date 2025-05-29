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

function Tabla({alumnos}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>LU</th>
                    <th>Nombre/s</th>
                    <th>Apellido/s</th>
                    <th>E-mail</th>
                    <th>Curso</th>
                    <th>Telefono</th>
                    <th>Domicilio</th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map((a,i) => (
                    <tr key={i}>
                        <td>{a.lu}</td>
                        <td>{a.nombre}</td>
                        <td>{a.apellido}</td>
                        <td>{a.email}</td>
                        <td>{a.curso}</td>
                        <td>{a.telefono}</td>
                        <td>{a.domicilio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabla
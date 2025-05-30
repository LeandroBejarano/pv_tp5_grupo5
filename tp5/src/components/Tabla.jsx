import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
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

function Tabla({ alumnos, setAlumnos }) {

  const botonesRef = useRef([]);
  const handlersRef = useRef([]);

  useEffect(() => {
    botonesRef.current.forEach((btn, i) => {
      if (btn && handlersRef.current[i]) {
        btn.removeEventListener("click", handlersRef.current[i]);
      }
    });

    botonesRef.current.forEach((btn, i) => {
      if (btn) {
        const handler = () => {
          const confirmar = confirm("¿Deseás eliminar este alumno?");
          if (confirmar) {
            setAlumnos(prev => prev.filter(a => a.lu !== alumnos[i].lu));
          }
        };
        handlersRef.current[i] = handler;
        btn.addEventListener("click", handler);
      }
    });

    return () => {
      botonesRef.current.forEach((btn, i) => {
        if (btn && handlersRef.current[i]) {
          btn.removeEventListener("click", handlersRef.current[i]);
        }
      });
    };
  }, [alumnos, setAlumnos]);

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
          <th style={styles.th}></th>
          <th style={styles.th}></th>
          <th style={styles.th}></th>
        </tr>
      </thead>
      <tbody>
        {alumnos.map((a, i) => (
          <tr key={a.lu}>
            <td style={styles.td}>{a.lu}</td>
            <td style={styles.td}>{a.nombre}</td>
            <td style={styles.td}>{a.apellido}</td>
            <td style={styles.td}>{a.email}</td>
            <td style={styles.td}>{a.curso}</td>
            <td style={styles.td}>{a.telefono}</td>
            <td style={styles.td}>{a.domicilio}</td>
            <td><Link to={`/lista/${a.lu}/editar`}>Editar</Link></td>
            <td><Link to={`/lista/${a.lu}`}>Ver</Link></td>
            <td><button ref={el => botonesRef.current[i] = el}>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;

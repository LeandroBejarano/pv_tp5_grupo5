import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
function VerAlumno({ alumnos }) {
    const [alumno, setAlumno] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const encontrado = alumnos.find(a => a.lu === id);
        if (encontrado) {
            setAlumno({ ...encontrado });
        }
    }, [id, alumnos]);
    if (!alumno) return (
  <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
    Cargando datos del alumno...
  </h2>
    );
    return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    padding: '1rem'
  }}>
    <div style={{
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
      maxWidth: '600px',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <h1 style={{
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#1e40af',
        borderBottom: '3px solid #3b82f6',
        paddingBottom: '0.5rem',
        width: '100%'
      }}>
        Detalles de {alumno.apellido}, {alumno.nombre}
      </h1>
      <p style={{ fontSize: '1rem', color: '#374151' }}><strong>LU:</strong> {alumno.lu}</p>
      <p style={{ fontSize: '1rem', color: '#374151' }}><strong>Correo electrónico:</strong> {alumno.email}</p>
      <p style={{ fontSize: '1rem', color: '#374151' }}><strong>Curso:</strong> {alumno.curso}</p>
      <p style={{ fontSize: '1rem', color: '#374151' }}><strong>Teléfono:</strong> {alumno.telefono}</p>
      <p style={{ fontSize: '1rem', color: '#374151' }}><strong>Domicilio:</strong> {alumno.domicilio}</p>
    </div>
  </div>
);


}

export default VerAlumno
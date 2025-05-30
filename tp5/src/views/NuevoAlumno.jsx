import { useNavigate } from "react-router-dom";
import generarLU from "../components/generarLU";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#e0f7fa',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  input: {
    padding: '10px',
    margin: '8px 0',
    width: '250px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#2B7A78',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#17252A',
    marginBottom: '20px',
  }
};

function NuevoAlumno(props) {
  const navigate = useNavigate();
  const [alumnos, setAlumnos] = props.alumnos;
  const [alumno, setAlumno] = props.alumno;

  const handleAlumno = (e) => {
    e.preventDefault();
    if (
      alumno.nombre.trim() === '' ||
      alumno.apellido.trim() === '' ||
      alumno.curso.trim() === '' ||
      alumno.domicilio.trim() === '' ||
      alumno.telefono.trim() === '' ||
      alumno.email.trim() === ''
    ) {
      alert('Error: llene los campos restantes y vuelva a intentarlo');
    } else {
      alumno.lu = generarLU(alumnos);
      setAlumnos([...alumnos, alumno]);
      setAlumno({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        telefono: '',
      });
      if (confirm('Alumno registrado ¿Volver a inicio?'))
        navigate('/inicio');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#e0f7fa'
    }}>
      <h1 style={styles.title}>Registro de Alumno</h1>
      <form style={styles.form} onSubmit={handleAlumno}>
        <input style={styles.input} value={alumno.nombre} type='text' onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })} placeholder='Nombres...' />
        <input style={styles.input} value={alumno.apellido} type='text' onChange={(e) => setAlumno({ ...alumno, apellido: e.target.value })} placeholder='Apellido...' />
        <input style={styles.input} value={alumno.email} type='email' onChange={(e) => setAlumno({ ...alumno, email: e.target.value })} placeholder='E-mail...' />
        <input style={styles.input} value={alumno.curso} type='text' onChange={(e) => setAlumno({ ...alumno, curso: e.target.value })} placeholder='Curso...' />
        <input style={styles.input} value={alumno.domicilio} type='text' onChange={(e) => setAlumno({ ...alumno, domicilio: e.target.value })} placeholder='Domicilio...' />
        <input style={styles.input} value={alumno.telefono} type='number' onChange={(e) => setAlumno({ ...alumno, telefono: e.target.value })} placeholder='Teléfono...' />
        <button style={styles.button} type='submit'>Registrar alumno</button>
      </form>
    </div>
  );
}

export default NuevoAlumno;

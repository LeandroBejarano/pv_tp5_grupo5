import { useNavigate } from "react-router-dom";
import generarLU from "../components/generarLU"

function NuevoAlumno(props) {
    const navigate = useNavigate();
    const [alumnos, setAlumnos] = props.alumnos;
    const [alumno, setAlumno] = props.alumno;
    const handleAlumno = (e) => {
        e.preventDefault();
        if (alumno.nombre.trim() == '' || alumno.apellido.trim() == '' || alumno.curso.trim() == '' || alumno.domicilio.trim() == '' || alumno.telefono.trim() == '' || alumno.email.trim() == '')
            alert('Error: llene los campos restantes y vuelva a intentarlo')
        else {
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
                navigate('/inicio')
        }
    }
    return (
        <div>
            <h1>Registro de Alumno</h1>
            <form onSubmit={handleAlumno} >
                <input value={alumno.nombre} type='text' onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })} placeholder='Nombres...' />
                <input value={alumno.apellido} type='text' onChange={(e) => setAlumno({ ...alumno, apellido: e.target.value })} placeholder='Apellido...' />
                <input value={alumno.email} type='text' onChange={(e) => setAlumno({ ...alumno, email: e.target.value })} placeholder='E-mail...' />
                <input value={alumno.curso} type='text' onChange={(e) => setAlumno({ ...alumno, curso: e.target.value })} placeholder='Curso...' />
                <input value={alumno.domicilio} type='text' onChange={(e) => setAlumno({ ...alumno, domicilio: e.target.value })} placeholder='Domicilio...' />
                <input value={alumno.telefono} type='number' onChange={(e) => setAlumno({ ...alumno, telefono: e.target.value })} placeholder='Telefono...' />
                <button type='submit' >Registrar alumno</button>
            </form>
        </div>
    )
}

export default NuevoAlumno
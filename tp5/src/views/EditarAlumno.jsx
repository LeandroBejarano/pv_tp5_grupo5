import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function EditarAlumno({ alumnos: [alumnos, setAlumnos] }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [alumno, setAlumno] = useState();
    useEffect(() => {
        const encontrado = alumnos.find(a => a.lu === id);
        if (encontrado) {
            setAlumno({ ...encontrado });
        }
    }, [id, alumnos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (alumno.nombre.trim() == '' || alumno.apellido.trim() == '' || alumno.telefono.trim() == '' || alumno.email.trim() == '' || alumno.domicilio.trim() == '' || alumno.curso.trim() == '')
            alert('Error: no deje campos vacios')
        else {
            const actualizado = alumnos.map(a => a.lu === id ? alumno : a);
            setAlumnos(actualizado);
            alert('Cambios guardados');
            navigate('/lista');
        }
    }

    if (!alumno) return <h2>Cargando alumno...</h2>;

    return (
        <form onSubmit={handleSubmit}>
            <input value={alumno.nombre} type='text' onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })} placeholder='Nombres...' />
            <input value={alumno.apellido} type='text' onChange={(e) => setAlumno({ ...alumno, apellido: e.target.value })} placeholder='Apellido...' />
            <input value={alumno.email} type='text' onChange={(e) => setAlumno({ ...alumno, email: e.target.value })} placeholder='E-mail...' />
            <input value={alumno.curso} type='text' onChange={(e) => setAlumno({ ...alumno, curso: e.target.value })} placeholder='Curso...' />
            <input value={alumno.domicilio} type='text' onChange={(e) => setAlumno({ ...alumno, domicilio: e.target.value })} placeholder='Domicilio...' />
            <input value={alumno.telefono} type='number' onChange={(e) => setAlumno({ ...alumno, telefono: e.target.value })} placeholder='Telefono...' />
            <button type='submit' >Guardar cambios</button>
        </form>
    )
}

export default EditarAlumno
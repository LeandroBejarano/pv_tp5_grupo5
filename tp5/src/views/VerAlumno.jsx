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
    if (!alumno) return <h2>Cargando datos del alumno...</h2>;
    return (
        <div>
            <h1>Detalles de {alumno.apellido}, {alumno.nombre}</h1>
            <p>LU: {alumno.lu}</p>
            <p>Correo elecronico: {alumno.email}</p>
            <p>Curso: {alumno.curso}</p>
            <p>Teléfono: {alumno.telefono}</p>
            <p>Domicilio: {alumno.domicilio}</p>
        </div>
    )
}

export default VerAlumno
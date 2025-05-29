import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

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
        <table>
            <thead>
                <tr>
                    <th>LU</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>E-mail</th>
                    <th>Curso</th>
                    <th>Teléfono</th>
                    <th>Domicilio</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map((a, i) => (
                    <tr key={a.lu}>
                        <td>{a.lu}</td>
                        <td>{a.nombre}</td>
                        <td>{a.apellido}</td>
                        <td>{a.email}</td>
                        <td>{a.curso}</td>
                        <td>{a.telefono}</td>
                        <td>{a.domicilio}</td>
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

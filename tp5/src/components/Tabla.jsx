import {Link} from 'react-router-dom'

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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map((a) => (
                    <tr key={a.lu}>
                        <td>{a.lu}</td>
                        <td>{a.nombre}</td>
                        <td>{a.apellido}</td>
                        <td>{a.email}</td>
                        <td>{a.curso}</td>
                        <td>{a.telefono}</td>
                        <td>{a.domicilio}</td>
                        <td><Link to={`/lista/${a.lu}/editar`}>Editar</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabla
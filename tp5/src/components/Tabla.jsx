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
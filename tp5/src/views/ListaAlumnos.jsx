import Tabla from "../components/Tabla"

function ListaAlumnos(props) {
    return (
        <div>
        {props.alumnos.length === 0 ? (
            <h1>No hay alumnos registrados</h1>
        ) : (
            <Tabla alumnos={props.alumnos} />
        )}
        </div>
    )
}

export default ListaAlumnos
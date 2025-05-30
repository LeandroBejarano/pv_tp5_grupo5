import Tabla from "../components/Tabla"

function ListaAlumnos(props) {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            width: '100vw', 
            textAlign: 'center' 
        }}>
            {props.alumnos.length === 0 ? (
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>No hay alumnos registrados</h1>
            ) : (
                <Tabla alumnos={props.alumnos} setAlumnos={props.setAlumnos} />
            )}
        </div>
    )
}

export default ListaAlumnos;

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [alumno, setAlumno] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    teléfono: '',
  })
  const [alumnos, setAlumnos] = useState([]);
  return (
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/inicio'>Pagina Principal</Link> </li>
              <li><Link to='/nuevo'>Registrar alumno</Link> </li>
              <li><Link to='/lista'>Lista de alumnos</Link> </li>
              <li><Link to='/acerca'>Acerca de nosotros</Link> </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/nuevo' element={<NuevoAlumno/>}></Route>
            <Route path='/acerca' element={<AcercaDe/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App

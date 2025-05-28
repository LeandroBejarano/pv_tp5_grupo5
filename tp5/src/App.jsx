import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import ListaAlumnos from './views/ListaAlumnos';
import Inicio from './views/Inicio';
import NuevoAlumno from './views/NuevoAlumno';
import AcercaDe from './views/AcercaDe';

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
            <Route path='/' element={<Navigate to='/inicio'/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/nuevo' element={<NuevoAlumno alumnos={[alumnos,setAlumnos]} alumno={[alumno, setAlumno]}/>}></Route>
            <Route path='/lista' element={<ListaAlumnos alumnos={alumnos}/>}></Route>
            <Route path='/acerca' element={<AcercaDe/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App

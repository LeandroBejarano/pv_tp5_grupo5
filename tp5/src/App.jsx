import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import ListaAlumnos from './views/ListaAlumnos';
import Inicio from './views/Inicio';
import NuevoAlumno from './views/NuevoAlumno';
import AcercaDe from './views/AcercaDe';
import EditarAlumno from './views/EditarAlumno';
import VerAlumno from './views/VerAlumno';
import NavBar from './components/NavBar';

function App() {
  const [alumno, setAlumno] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  });
  const [alumnos, setAlumnos] = useState([]);

  const linkStyle = {
    textDecoration: 'none',
    color: '#3b82f6',
    transition: 'all 0.3s ease',
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar>
          <Link to='/inicio' style={linkStyle}>Página Principal</Link>
          <Link to='/nuevo' style={linkStyle}>Registrar alumno</Link>
          <Link to='/lista' style={linkStyle}>Lista de alumnos</Link>
          <Link to='/acerca' style={linkStyle}>Acerca de nosotros</Link>
        </NavBar>

        <Routes>
          <Route path='/' element={<Navigate to='/inicio' />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/nuevo' element={<NuevoAlumno alumnos={[alumnos, setAlumnos]} alumno={[alumno, setAlumno]} />}></Route>
          <Route path='/lista' element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos} />}></Route>
          <Route path='/lista/:id' element={<VerAlumno alumnos={alumnos} />}></Route>
          <Route path='/lista/:id/editar' element={<EditarAlumno alumnos={[alumnos, setAlumnos]} />}> </Route>
          <Route path='/acerca' element={<AcercaDe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

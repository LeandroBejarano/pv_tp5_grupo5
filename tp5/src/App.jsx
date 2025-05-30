import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import ListaAlumnos from './views/ListaAlumnos';
import Inicio from './views/Inicio';
import NuevoAlumno from './views/NuevoAlumno';
import AcercaDe from './views/AcercaDe';
import EditarAlumno from './views/EditarAlumno';
import VerAlumno from './views/VerAlumno';

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

  const navContainer = {
    padding: '20px',
    backgroundColor: '#e0f7f7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#3b82f6',
    transition: 'all 0.3s ease',
  };

  return (
 styles
    <div>
      <BrowserRouter>
        <nav style={navContainer}>
          <Link to='/inicio' style={linkStyle}>Página Principal</Link>
          <Link to='/nuevo' style={linkStyle}>Registrar alumno</Link>
          <Link to='/lista' style={linkStyle}>Lista de alumnos</Link>
          <Link to='/acerca' style={linkStyle}>Acerca de nosotros</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Navigate to='/inicio' />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/nuevo' element={<NuevoAlumno alumnos={[alumnos, setAlumnos]} alumno={[alumno, setAlumno]} />} />
          <Route path='/lista' element={<ListaAlumnos alumnos={alumnos} />} />
          <Route path='/acerca' element={<AcercaDe />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

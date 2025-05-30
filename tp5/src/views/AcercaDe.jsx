function AcercaDe() {
  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      color: '#000',
      lineHeight: '1.8',
      textAlign: 'center',
    },
    heading1: {
      fontSize: '36px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    heading2: {
      fontSize: '28px',
      marginTop: '40px',
      marginBottom: '20px',
    },
    heading3: {
      fontSize: '22px',
      marginTop: '30px',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '18px',
      margin: '15px 0',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Nosotros</h1>
      <p style={styles.paragraph}>
        Somos tres estudiantes de la <strong>Facultad de Ingeniería de Jujuy</strong>, cursando la carrera de 
        <strong> Analista Programador Universitario</strong>. Actualmente estamos aprendiendo tecnologías modernas 
        de desarrollo web, incluyendo <strong>React</strong>, <strong>Vite</strong> y <strong>React Router</strong>.
      </p>

      <h2 style={styles.heading2}>Integrantes del grupo</h2>

      <div>
        <h3 style={styles.heading3}>Aldo Daniel Rearte</h3>
        <p style={styles.paragraph}>
          Me interesa el desarrollo de aplicaciones web y móviles. Estoy aprendiendo React para crear interfaces 
          dinámicas e interactivas. Me gusta trabajar en equipo y resolver problemas técnicos.
        </p>
      </div>

      <div>
        <h3 style={styles.heading3}>Nahuel Tobias Torres</h3>
        <p style={styles.paragraph}>
          Apasionado por la programación y la lógica. Disfruto aprendiendo nuevas herramientas como Vite, que mejora 
          la velocidad del desarrollo. Mi objetivo es convertirme en desarrollador full stack.
        </p>
      </div>

      <div>
        <h3 style={styles.heading3}>Leandro Ruben Bejarano</h3>
        <p style={styles.paragraph}>
          Me interesa el diseño de interfaces y la experiencia del usuario. Estoy aprendiendo React Router para 
          construir sitios web con navegación fluida. Espero aplicar mis conocimientos en proyectos reales.
        </p>
      </div>
    </div>
  );
}

export default AcercaDe;

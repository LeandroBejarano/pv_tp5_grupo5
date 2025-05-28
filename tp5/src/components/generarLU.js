function generarLU(alumnos) {
    const prefijo = "APU";
    const numero = alumnos.length + 1;
    const numeroFormateado = String(numero).padStart(5, "0");
    return prefijo + numeroFormateado;
};

export default generarLU
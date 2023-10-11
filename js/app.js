function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function simularLanzamientos(cantidad) {
    const resultados = Array.from({ length: cantidad }, () => lanzarDado() + lanzarDado());
  
    const conteoSumas = resultados.reduce((conteo, suma) => (conteo[suma] = (conteo[suma] || 0) + 1, conteo), {});
  
    return Object.entries(conteoSumas).map(([suma, apariciones]) => ({ Suma: parseInt(suma), Apariciones: apariciones }));
  }
  
  const cantidadLanzamientos = parseInt(prompt('Ingrese la cantidad de veces que desea lanzar los dados:'));
  const resultados = simularLanzamientos(cantidadLanzamientos);
  
  console.table(resultados);
  
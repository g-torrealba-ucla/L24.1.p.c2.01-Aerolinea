export class Cl_vAerolinea {
  reportar(salida, ingTotal, menorCntPasajeros, porcInternacionales) {
    salida.innerHTML += `<br>Total de ingresos: ${ingTotal}`;
    salida.innerHTML += `<br>Menor cantidad de pasajeros: ${menorCntPasajeros}`;
    salida.innerHTML += `<br>Porcentaje de vuelos internacionales: ${porcInternacionales}%`;
  }
}

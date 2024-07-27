export class Cl_vVuelo {
  leerDatos() {
    let numero = prompt("numero");
    let tipo = prompt("tipo");
    let costo = prompt("costo");
    let pasajeros = prompt("pasajeros");
    return { numero, tipo, costo, pasajeros };
  }
  reportar(salida, numero, ingreso) {
    salida.innerHTML += `<br>El vuelo ${numero} tiene un ingreso de ${ingreso}`;
  }
}
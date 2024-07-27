import { Cl_vAerolinea } from "./Cl_vAerolinea.js";
import { Cl_vVuelo } from "./Cl_vVuelo.js";
import { Cl_mVuelo } from "./Cl_mVuelo.js";
import { Cl_mAerolinea } from "./Cl_mAerolinea.js";
export class Controlador {
  constructor() {
    this.Cl_mAerolinea = new Cl_mAerolinea();
    this.Cl_vVuelo = new Cl_vVuelo();
    this.Cl_vAerolinea = new Cl_vAerolinea();
    this.salida = document.getElementById("salida");
  }
  procesarAerolinea() {
    do {
      let datos = this.Cl_vVuelo.leerDatos(),
        vuelo = new Cl_mVuelo(datos);
      this.Cl_mAerolinea.procesarVuelo(vuelo);
      this.Cl_vVuelo.reportar(this.salida, vuelo.numero, vuelo.ingreso());
    } while (confirm("¿Hay otro vuelo?"));
    this.Cl_vAerolinea.reportar(
      this.salida,
      this.Cl_mAerolinea.ingresoTotal(),
      this.Cl_mAerolinea.menorCantPasajeros(),
      this.Cl_mAerolinea.porcInternacionales()
    );
  }
}

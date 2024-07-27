import { Controlador } from "./Cl_controlador.js";
export class Cl_main {
  constructor() {
    let control = new Controlador();
    control.procesarAerolinea();
  }
}
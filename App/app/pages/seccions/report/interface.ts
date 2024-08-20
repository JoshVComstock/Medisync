// interface.ts
export interface CartillaRelacion {
    codigoBarras: string;
    numeroMuestra: number;
  }
  
  export interface PacienteRelacion {
    nombrePaciente: string;
    edadGestional: [string, string];
    fechaNacimiento: string;
    pesoNacimiento: number;
  }
  
  export interface MadreRelacion {
    nombreMadre: string;
    telefono: string[];
  }
  
  export interface ResultadosLaboratorio {
    idResultadosLaboratorio: number;
    fechaResultado: string;
    resultado: string;
    observaciones: string;
    cartillaRelacion: CartillaRelacion;
    pacienteRelacion: PacienteRelacion;
    madreRelacion: MadreRelacion;
  }
  
export type Amount = number;

export type ValueRange = {
  max: number | string;
  min: number | string;
};

export type DateRange = {
  startDate?: Date;
  endDate?: Date;
};

export enum statusCodeType {}

/**
 * Interfaz que describe un identificador
 */
export interface Identifier {
  /** Codigo del identificador */
  identifierID: string;

  /** Nombre del identificador */
  identifierName: string;

  prefix?: string;

  /**
   * Texto de forma libre que transmite información
   * que no está contenida explícitamente en otras
   * estructuras.
   */
  description?: string[];

  sequenceNumeric?: {
    /**
     * Una rango que indica el orden de una secuencia
     * para este identificador.
     */
    valueRange: ValueRange;

    /**
     * Valor actual disponibles para asignacion.
     */
    currentValue?: number;
  };

  /** Periodo de validez */
  validity?: DateRange[];

  /** Indica si es el identificador principal */
  main?: boolean;
}

/** Interfaz que define un codigo */
export interface Code {
  /** Un tipo de identificador */
  identifier?: Identifier;

  codeID: number | string;

  /** Extension del ID */
  extendedID?: number | string;

  /** Indica si es el codigo principal */
  main?: boolean;
}

export type a = {
  at: Date;
  event: string;
  uuid: string;
};

export interface MetaOptions {
  active: boolean;
  deleted: boolean;
  created: a;
  updated: a;
}

export default interface Base extends MetaOptions {
  code?: Code | Code[];

  /**
   * Un identificador único universal para una
   * instancia de este documento.
   */
  UUID?: string;
}

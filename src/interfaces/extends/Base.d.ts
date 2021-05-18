declare module 'Base' {
  namespace BaseTypes {
    type Amount = number;

    type ValueRange = {
      max: number | string;
      min: number | string;
    };

    type DateRange = {
      startDate?: Date;
      endDate?: Date;
    };
  }

  /**
   * Interfaz que describe un identificador
   */
  export interface Identifier {
    /** Codigo del identificador */
    identifierCode?: string;

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
      valueRange: BaseTypes.ValueRange;

      /**
       * Valor actual disponibles para asignacion.
       */
      currentValue?: number;
    };

    /** Periodo de validez */
    validity?: BaseTypes.DateRange[];

    /** Indica si es el identificador principal */
    main?: boolean;
  }

  /** Interfaz que define un codigo */
  export interface Code {
    /** Un tipo de identificador */
    identifier?: Identifier;

    value: number | string;

    /** Extension del ID */
    extended?: number | string;

    /** Indica si es el codigo principal */
    main?: boolean;
  }

  interface MetaOptions {
    active: boolean;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  export default interface Base extends MetaOptions {
    code?: Code | Code[];

    /**
     * Un identificador único universal para una
     * instancia de este documento.
     */
    UUID?: string;
  }
}

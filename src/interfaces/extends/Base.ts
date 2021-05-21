export type Amount = number;

export type ValueRange = {
  max: number | string;
  min: number | string;
};

export type DateRange = {
  startDate?: Date;
  endDate?: Date;
};

export enum statusCodeType {
  NEW = 'new',
  AVALIABLE = 'available',
  INACTIVE = 'inactive',
  DELETED = 'deleted'
}

export enum optionTypesType {
  CHARGE_TYPE = 'chargeType',
  CURRENCY_TYPE = 'currencyType',
  DOCUMENT_TYPE = 'documentType',
  IDENTIFICATION_TYPE = 'identificationType',
  PAYMENT_MEAN = 'paymentMean',
  PAYMENT_METHOD = 'paymentMethod',
  PRICELIST_TYPE = 'priceListType',
  TAX_TYPE = 'taxType',
  TAX_LEVEL = 'taxLevel',
  TAX_RATE = 'taxRate',
  MEASURE_UNIT = 'measureUnit'
}

export interface OptionType {
  index?: number;
  optionName: string;
  description?: string[];
  defaultValue?: boolean;
  _type: optionTypesType;
}

/**
 * Interfaz que describe un identificador
 */
export interface Identifier {
  /** Codigo del identificador */
  identifierID?: string;

  /** Nombre del identificador */
  identifierName?: string;

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
  index?: number;

  /** Un tipo de identificador */
  identifier?: Identifier;

  /** Un indica un tipo de codigo. */
  codeType?: OptionType;

  codeID: number | string;

  /** Extension del ID */
  extendedID?: number | string;

  /** Indica si es el codigo principal */
  main?: boolean;
}

export type TraceReport = {
  traceCode: Code;
  traceAt: Date;
  referencedUUID: string;
  associatedModel: string;
};

export interface MetaOptions {
  created?: TraceReport;
  updated?: TraceReport[];
}

export default interface Base extends MetaOptions {
  code?: Code | Code[];
  documentStatusCode: statusCodeType;

  /**
   * Un identificador único universal para una
   * instancia de este documento.
   */
  UUID?: string;
}

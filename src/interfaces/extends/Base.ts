export type Amount = number;

export type ValueRange = {
  max: number | string;
  min: number | string;
};

export type DateRange = {
  startDate: Date;
  endDate?: Date;
};

export enum statusCodeType {
  NEW = 'new',
  AVALIABLE = 'available',
  INACTIVE = 'inactive',
  DELETED = 'deleted'
}

export enum groupOptionsTypesType {
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

export interface GroupOptionType {
  index?: number;
  groupType: groupOptionsTypesType;
  optionCode?: string;
  optionName: string;
  description?: string[];
  main: boolean;
}

/**
 * Interfaz que describe un identificador
 */
export interface Identifier {
  /** Codigo del identificador */
  identifierCode?: string;

  /** Nombre del identificador */
  identifierName?: string;

  optionType: GroupOptionType;

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
  main: boolean;
}

/** Interfaz que define un codigo */
export interface Code {
  index?: number;

  /** Un tipo de identificador */
  identifier?: Identifier;

  /** Un tipo de codigo. */
  codeType?: GroupOptionType;

  codeID: number | string;

  /** Extension del ID */
  extendedID?: number | string;

  /** Indica si es el codigo principal */
  main?: boolean;
}

export type TraceRoute = {
  traceCode: Code;
  traceAt: Date;
  referencedUUID: string;
  associatedModel: string;
};

export interface MetaOptions {
  createdAt?: Date; // TraceReport;
  updatedAt?: Date; // TraceReport[];
}

export default interface Base extends MetaOptions {
  /**
   * Un número que indica el orden de este documento
   * en la secuencia. EJ: 1, 2, 3, 4, etc.
   */
  sequence?: number;

  /**
   * Un código para el documento
   */
  code?: Code | Code[];
  statusCode: statusCodeType;

  /**
   * Un identificador único universal para una
   * instancia de este documento.
   */
  UUID?: string;
}

import Base from '../extends/Base';

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

export interface IOptionType extends Base {
  order?: number;
  optionName: string;
  description?: string[];
  defaultValue?: boolean;
  _type: optionTypesType;
}

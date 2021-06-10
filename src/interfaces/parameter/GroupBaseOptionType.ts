export enum groupOptionsTypesType {
  CHARGE_TYPE = 'chargeType',
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

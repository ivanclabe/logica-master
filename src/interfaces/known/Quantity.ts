export interface IQuantity {
  receivedQuantity?: number;
  onOrderQuantity?: number;
  shippedQuantity?: number;
  allocatedQuantity?: number;
  backOrderedQuantity?: number;
  initLevelQuantity?: number;
  onHandQuantity: () => number;
  availableQuantity: () => number;
  currentLevelQuantity: () => number;
}

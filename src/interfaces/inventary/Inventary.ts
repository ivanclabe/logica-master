import Base from '../extends/Base';
import { IPeriod } from '../common/Period';
import { ILotIdentification } from './ItemInstance';
import { IItem } from './Item';

export interface BaseQuantity {
  /** Cantidad Recibida */
  receivedQuantity?: number;

  /** Cantidad Ordenada */
  onOrderQuantity?: number;

  /** Cantidad Enviada */
  shippedQuantity?: number;

  /** Cantidad asignada */
  allocatedQuantity?: number;

  /** Cantidad Pedido de vuelta */
  backOrderedQuantity?: number;

  /** Nivel Inicial */
  initLevelQuantity?: number;

  /**
   * Cantidad En Fisico
   * onHand = initLevel + received - shipped
   */
  onHandQuantity: () => number;

  /**
   * Cantidad Disponible
   * available = initLevel + received - shipped - allocated
   */
  availableQuantity: () => number;

  /**
   * Nivel Actual
   * currentLevel = initLevel + onOrder + received - shipped - allocated - backOrdered
   */
  currentLevelQuantity: () => number;
}

/** Interfaz que describe un lote inventariado */
export interface ILotInventary extends Base, BaseQuantity {
  inventaryLine: IInventaryLine;
  lotsIdentification: ILotIdentification;
}

/** Interfaz que describe una linea de inventario */
export interface IInventaryLine extends Base, BaseQuantity {
  inventary: IInventary;
  item: IItem;
}

/** Interfaz que describe un inventario */
export interface IInventary extends Base {
  inventaryPeriod: IPeriod;
  note?: string[];
  inventariesLine: IInventaryLine[];
}

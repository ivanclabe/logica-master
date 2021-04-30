import { Schema, Document } from 'mongoose';

import connect from '../../../config/db.config';

export interface IDocument extends Document {
  issueDate: Date;
  dueDate?: Date;
  currencyCode: string;
  note: [string];
}

/**
 * Modelo para describir de un documento
 * @name Document
 * @return {object} - Return Documento Model
 */
const documentSchema = new Schema(
  {
    issueDate: {
      type: Date,
      required: true
    },
    dueDate: Date,
    currencyCode: String,
    note: [String],
    /** Indica el tipo de factura */
    // documentType: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'OperSetting',
    //   required: true
    // },
    documentPeriods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Period',
        required: true
      }
    ],
    /** Terminal que emite el documento */
    terminalParty: {
      type: Schema.Types.ObjectId,
      ref: 'TerminalParty',
      required: true
    }
  },
  {
    collection: 'documents',
    discriminatorKey: '__t'
  }
);

export const DocumentModel = connect.model('Document', documentSchema);

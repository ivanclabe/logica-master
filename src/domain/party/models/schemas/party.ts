import { Schema } from 'mongoose';

/**
 * Una modelo para describir una organización,
 * suborganización o individuo que cumple un rol
 * en un proceso empresarial.
 * @name Party
 * @return {object} - Retorna el modelo Party
 */
const partySchema: Schema = new Schema(
  {
    /** Identificador para este party */
    partyIdentification: [
      {
        name: {
          type: Schema.Types.ObjectId,
          ref: 'OperSetting',
          required: true
        },
        value: { type: String, trim: true, required: true }
      }
    ]
  },
  {
    discriminatorKey: '__t',
    collection: 'parties'
  }
);

export default partySchema;

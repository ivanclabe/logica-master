import { Schema } from 'mongoose';

import { PartyModel } from '../../domain/shared/discriminators/party';

/**
 *
 * Esquema para describir una organización
 *
 * @name OrganizationSchema
 * @description Esquema para describir una organización o
 * suborganización que cumple un rol
 * en un proceso de negoco.
 * @returns {Schema}
 */
const organizationSchema: Schema = new Schema({
  /**
   * Grupo con información sobre el nombre
   * de la organizacion.
   */
  organizationName: [
    {
      type: String,
      trim: true,
      required: true
    }
  ],
  logo: String,
  website: String,
  /**
   * Grupo de información tributarias del
   * cliente.
   */
  taxScheme: [
    {
      registrationName: String,
      taxLevelCode: String,
      taxScheme: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TaxScheme'
      }
    }
  ],
  contracts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Contract'
    }
  ]
});

export const OrganizationPartyModel = PartyModel.discriminator(
  'OrganizationParty',
  organizationSchema
);

import { Schema } from 'mongoose';

import BaseSchema from '../../schema/baseSchema';
import {
  organizationSchema,
  personSchema,
  contactSchema
} from '../../schema/nested';
import appConnect from '../../config/db.config';
import { collectionName } from '../../constants/collections';

const { PARTY_COLLECTION_NAME } = collectionName;

/**
 * Una modelo para describir una organización,
 * suborganización o individuo que cumple un rol
 * en un proceso empresarial.
 * @name Party
 * @return {object} - Retorna el modelo Party
 */
const partySchema = new BaseSchema(
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
    collection: PARTY_COLLECTION_NAME
  }
);

const PartyModel = appConnect.model('Party', partySchema);

/** Customer Party */
const customerSchema = new Schema({
  party: organizationSchema,
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
  contact: contactSchema,
  buyerContact: contactSchema
});
export const Customer = PartyModel.discriminator(
  'CustomerParty',
  customerSchema
);

/** Employee Party */
const employeeSchema = new Schema({
  party: personSchema,
  terminals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Terminal'
    }
  ],
  birthday: Date,
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  },
  avatar: String,
  jobTitle: String,
  contact: contactSchema,
  //  Meta!
  isAdminUser: { type: Boolean, default: false },
  isAuthAccount: { type: Boolean, default: false }
});
export const Employee = PartyModel.discriminator(
  'EmployeeParty',
  employeeSchema
);

/** Supplier Party */
const supplierSchema = new Schema({
  party: organizationSchema,
  /**
   * Grupo de información tributarias del
   * proveedor.
   */
  taxScheme: [
    {
      registrationName: String,
      taxLevelCode: String,
      taxScheme: {
        type: Schema.Types.ObjectId,
        ref: 'OperSetting',
        required: true
      }
    }
  ],
  contact: contactSchema,
  sellerContact: contactSchema
});
export const Supplier = PartyModel.discriminator(
  'SupplierParty',
  supplierSchema
);

/** Person Party */
const personSchemas = new Schema({
  party: personSchema,
  avatar: String,
  jobTitle: String,
  contact: contactSchema
});
export const Person = PartyModel.discriminator('PersonParty', personSchemas);

/** Terminal Party */
const terminalSchema = new Schema({
  party: organizationSchema,
  responsableParty: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  },
  logo: String
});
export const Terminal = PartyModel.discriminator(
  'TerminalParty',
  terminalSchema
);

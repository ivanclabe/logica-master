import PartyModel from './party.model';
import { employeeSchema } from '../schemas';

export const Employee = PartyModel.discriminator(
  'EmployeeParty',
  employeeSchema
);

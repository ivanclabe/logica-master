export const Employee = PartyModel.discriminator(
  'EmployeeParty',
  employeeSchema
);

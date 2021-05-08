import { GenericApi, ModelData } from './generic-api';

export type Employee = {
  company: string;
  descriptionEn: string;
  descriptionFr: string;
  displayOrder: number;
  email: string;
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  roleEn: string;
  roleFr: string;
};

export interface EmployeeData extends ModelData {
  response: {
    employees: Employee[];
  };
}

export const personnelApi = new GenericApi<EmployeeData, Employee>('/api/employee');

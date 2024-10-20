import { IDate } from "./IDate";
export interface IWork {
  position: string;
  company: string;
  dateStart: IDate;
  dateEnd?: IDate;
  city: string;
  companyDesc: string;
  tasks: string;
  contactPerson: string;
  contactInfo: string;
}

export interface IWorksData {
  title: string;
  works: IWork[];
}

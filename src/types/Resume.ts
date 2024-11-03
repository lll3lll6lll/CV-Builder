import { IDate } from "./IDate";
export interface IWork {
  id: string;
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

export interface IResume {
  id: string;
  works: IWorksData;
}

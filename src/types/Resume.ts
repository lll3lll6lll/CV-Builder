import { IDefaultTittles } from "./Settings";
export interface IWork {
  id: string;
  tittles: IDefaultTittles;
  position: string;
  company: string;
  dateStart: Date;
  dateEnd?: Date;
  city: string;
  companyDesc: string;
  tasks: string;
  contactPerson: string;
  contactInfo: string;
}

export interface IResume {
  id: string;
  tittles: IDefaultTittles;
  works: IWork[];
}

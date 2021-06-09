export interface Student{
    name:string
    email:string
    tel:string
  }
  export interface ResponseStudentAll {
  result: StudentModel[];
}

export interface StudentModel {
  createBy?: any;
  createDate?: string;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: string;
  version: number;
}
export interface StudentAllCondition {
  name?: string;
  email?: string;
  tel?: string;
}



  
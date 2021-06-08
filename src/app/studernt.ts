export interface Student{
    name:string
    email:string
    tel:string
  }
  export interface responseStudentAll {
  result: Student[];
}

interface Result {
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

  
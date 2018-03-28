export interface User {
    //username is email for teachers and something random for students
    username: string;
    password: string;
    type:string;
}

export interface Teacher extends User{
    hp:number;
    name: {
        firstName:string;
        lastName:string;
    }
    picture:any;
}

export interface Student extends User {
    teacher:string;
    name: {
        firstName:string;
        lastName:string;
    }
    hp:number;
    picture:any;
}
export interface User {
    //username is email for teachers and something random for students
    username: string;
    password: string;
    //type is to determine what the account is after it's logged in
    type:string;
    refId:string;
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
    name: {
        firstName:string;
        lastName:string;
    }
    hp:number;
    picture:any;
    teacherId:string;

}

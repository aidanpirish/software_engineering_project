export interface SignUp {
    name:{
        firstName: string;
        lastName: string;
    }
    username: string;
    password: string;
    picture?: string
}
export class User{
    userid:number;
    username:string;
    gender: string;
    status: string;

    constructor(id:number,name:string,gender:string,status:string){
        this.userid = id;
        this.username = name;
        this.gender = gender;
        this.status = status;
    }
}



export class Register { 
    UserName:string;   
    Password:string;  
    Email:string;  
    Role: string; 
    type: String;

    constructor(UserName?: string, Password?:string,Email?:number){
        this.UserName = this.UserName ? this.UserName : '';
        this.Password = this.Password ? this.Password : '';
        this.Email = this. Email? this.Email : '';
    }
} 

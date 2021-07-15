export class User {
    id: number;
    login: string;
    email: string;
    hashPass: string;
    constructor(id: number, login: string, email: string, hashPass: string)
    {
        this.id = id;
        this.login = login;
        this.email = email;
        this.hashPass = hashPass;
    }

}
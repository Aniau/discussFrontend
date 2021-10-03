export class User {
    id: number;
    clientCommunicationHubId: string;
    login: string;
    email: string;
    status: string;
    hashPass: string;
    constructor(id: number, clientCommunicationHubId: string, login: string, email: string, status: string, 
                hashPass: string)
    {
        this.id = id;
        this.clientCommunicationHubId = clientCommunicationHubId;
        this.login = login;
        this.email = email;
        this.status = status;
        this.hashPass = hashPass;
    }

}
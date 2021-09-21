export interface Message
{
    message: string;
    send: boolean;
    date: Date;
    login: string | null;
}
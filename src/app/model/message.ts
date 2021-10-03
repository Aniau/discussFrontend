import { Guid } from "guid-typescript";

export interface Message
{
    messageId: Guid;
    destinationClientId: string;
    sendingClientId: string;
    message: string;
    date: Date;
}
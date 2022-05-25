export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface IMessage {
  date: string;
  message: string;
  contactId: number;
}

export interface IContact {
  name: string;
  id: number;
  messages?: IMessage[];
  avatar: string;
}

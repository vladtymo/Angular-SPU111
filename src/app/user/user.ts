export interface IUser {
    email: string;
    id: number;
    name: string;
    birthdate: Date;
    isAdmin: boolean;
}

export const USERS: IUser[] = [
    {
        id: 1001,
        name: "Bob",
        birthdate: new Date(),
        email: 'santa@ukr.net',
        isAdmin: false
    },
    {
        id: 1003,
        name: "Luda",
        birthdate: new Date(),
        email: 'gaergae@ukr.net',
        isAdmin: true
    },
    {
        id: 1090,
        name: "Oleg",
        birthdate: new Date(),
        email: 'gagaga@ukr.net',
        isAdmin: true
    }
]
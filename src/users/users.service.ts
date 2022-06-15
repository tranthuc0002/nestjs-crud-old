import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Doe',
            username: 'doe',
            password: 'mypass'
        },
        {
            id: 2,
            name: 'Jeane',
            username: 'jeane',
            password: 'passmy'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}

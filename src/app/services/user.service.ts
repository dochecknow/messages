
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

export let Users: User[] = [
    // tslint:disable-next-line:max-line-length
    { id: '1', username: 'Kevin1', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', email: 'wangsm@shinetechchina.com' },
    { id: '2', username: 'Mike', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', email: 'wangsm@shinetechchina.com' },
    // tslint:disable-next-line:max-line-length
    { id: '3', username: 'Sharon', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', email: 'wangsm@shinetechchina.com' },
    { id: '4', username: 'Alan', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', email: 'wangsm@shinetechchina.com' },
    // tslint:disable-next-line:max-line-length
    { id: '5', username: 'Andy', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', email: 'wangsm@shinetechchina.com' }
];

@Injectable()
export class UserService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(Users);
    }
    getUser(id: string): Promise<User> {
        return this.getUsers()
            .then(userArray => userArray.find(user => user.id === id));
    }
}

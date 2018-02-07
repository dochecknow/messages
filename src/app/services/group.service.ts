import { Group } from '../models/group.model';
import { Injectable } from '@angular/core';

export let Groups: Group[] = [
    { id: '1', name: 'Mr. Nice1', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin1', 'Mike'] },
    { id: '2', name: 'Mr. Nice2', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin2', 'Mike'] },
    { id: '3', name: 'Mr. Nice3', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin3', 'Mike'] },
    { id: '4', name: 'Mr. Nice4', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin4', 'Mike'] },
    { id: '5', name: 'Mr. Nice5', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin5', 'Mike'] },
    { id: '6', name: 'Mr. Nice6', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin6', 'Mike'] },
    { id: '7', name: 'Mr. Nice7', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', members: ['Kevin7', 'Mike'] },
];

@Injectable()
export class GroupService {
    getGroups(): Promise<Group[]> {
        return Promise.resolve(Groups);
    }
    getGroup(id: string): Promise<Group> {
        return this.getGroups()
            .then(group => group.find(g => g.id === id));
    }
}

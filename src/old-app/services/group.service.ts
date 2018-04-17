import { Group } from '../models/group.model';
import { Injectable } from '@angular/core';

export let Groups: Group[] = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'MyGroup1', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: 'Kevin', LatestMessage: 'I find a very interest thing', LatestMessageDate: '02/08/2018', members: ['Kevin1', 'Mike'] },
    { id: '2', name: 'MyGroup2', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin2', 'Mike'] },
    // tslint:disable-next-line:max-line-length
    { id: '3', name: 'MyGroup3', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin3', 'Mike'] },
    { id: '4', name: 'MyGroup4', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin4', 'Mike'] },
    // tslint:disable-next-line:max-line-length
    { id: '5', name: 'MyGroup5', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin5', 'Mike'] }
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
    addGroup(name: string, users: string[]): string {
        const groupID = (Groups.length + 1).toString();
        Groups.push({
            id: groupID,
            name: name,
            imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',
            LatestMessageUser: '', LatestMessage: '',
            LatestMessageDate: '',
            members: users
        });
        return groupID;
    }


}

import { Injectable } from '@angular/core';
import { Messages } from '../models/messages.model';

export let MessagesDumy: Messages[] = [

    {
        idSender: '1',
        idGroup: '1',
        message: 'Please talk to me some words',
        timestamp: 1,
        imageSender: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',
        imageGroup: '',
        nameSender: 'Sharon',
        nameGroup: ''
    },
    {
        idSender: 'MineID',
        idGroup: '1',
        message: 'I love you',
        timestamp: 1,
        imageSender: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',
        imageGroup: '',
        nameSender: 'Me',
        nameGroup: ''
    }
];

@Injectable()
export class MessageService {

    getMessages(): Promise<Messages[]> {
        return Promise.resolve(MessagesDumy);
    }
    getMessagesByGroup(groupID: string): Promise<Messages[]> {
        const messageGroup = MessagesDumy.filter(r => r.idGroup === groupID);
        return Promise.resolve(messageGroup);
    }
    sentMessage(msg: Messages): void {
        MessagesDumy.push(msg);
    }
}

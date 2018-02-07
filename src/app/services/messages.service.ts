import { Injectable } from '@angular/core';
import { Messages } from '../models/messages.model';

export let MessagesDumy: Messages[] = [];

@Injectable()
export class MessageService {

    getMessages(): Promise<Messages[]> {
        return Promise.resolve(MessagesDumy);
    }
    getMessagesByGroup(groupID: string): Promise<Messages[]> {
        let messageGroup = MessagesDumy.filter(r => r.idGroup === groupID);
        return Promise.resolve(messageGroup);
    }
    sentMessage(msg: string): void {
        MessagesDumy.push(new Messages('sender', 'group', msg, 1, 'image', 'imageGroup', 'nameSender', 'nameGroup'));
    }
}

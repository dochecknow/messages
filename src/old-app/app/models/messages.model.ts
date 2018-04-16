export class Messages {
    public idSender: string;
    public idGroup:	string;
    public message:	string;
    public timestamp:	number;
    public imageSender:	string;
    public imageGroup:	string;
    public nameSender:	string;
    public nameGroup:	string;

    constructor(idSender: string, idGroup: string, message: string,
         timestamp: number, imageSender: string, imageGroup: string,
         nameSender: string, nameGroup: string) {
        this.idSender = idSender;
        this.idGroup = idGroup;
        this.message = message;
        this.timestamp = timestamp;
        this.imageSender = imageSender;
        this.imageGroup = imageGroup;
        this.nameSender = nameSender;
        this.nameGroup = nameGroup;
    }
}

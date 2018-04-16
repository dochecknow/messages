export class Group {
    public id: string;
    public name: string;
    public imagepath: string;
    public LatestMessageUser: string;
    public LatestMessage: string;
    public LatestMessageDate: string;
    public members: Array<string>;
    constructor(id: string, imagepath: string, name: string, members: Array<string>) {
        this.id = id;
        this.name = name;
        this.imagepath = imagepath;
        this.members = members;
    }
    static createNew(): Group {
        return new Group('', '', '', null);
    }
}

export class Group {
    public id: string;
    public name: string;
    public imagepath: string;
    public members: Array<string>;
    constructor(id: string, imagepath: string, name: string, members: Array<string>) {
        this.id = id;
        this.name = name;
        this.imagepath = imagepath;
        this.members = members;
    }
}

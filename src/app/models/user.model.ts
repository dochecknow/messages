export class User {
    public id: string;
    public email: string;
    public username: string;
    public imagepath: string;
    constructor(id: string, imagepath: string, email: string, username: string) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.imagepath = imagepath;
    }
}

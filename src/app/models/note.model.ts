export class Note{
    title: string;
    body: string;
    id: number;
    lastEdited: string;
    constructor(id,title, body){
        this.id = id;
        this.title = title;
        this.body = body;
        this.lastEdited = "";
    }
}
import { v4 as uuidv4 } from 'uuid';


class Connection {
    public id: String;
    private personA: WebSocket;
    private personB: WebSocket;
    private code: String;
    private interviewName: String;

    
    constructor(a:WebSocket,interviewName: String){
        this.personA=a;
        this.id = uuidv4();
        this.interviewName=interviewName;
    }

    addUser(b:WebSocket){
        this.personB=b;
        b.send(JSON.stringify({
            "success":"joined"
        }));
        this.personA.send(JSON.stringify({
            "success":"other_joined"
        }))
    }

    broadcast(a:WebSocket,b:WebSocket){

    }
}
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });


wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', (data) => {
        const message = JSON.parse(data.toString());

       
    
    })

    ws.on('close', () => {
        
    });
});
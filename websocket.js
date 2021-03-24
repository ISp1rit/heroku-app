const WebSocket = require('ws');

module.exports.createWss = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log(`Received: ${message}`);

            ws.send(`Hello, you sent -> ${message}`);
        });

        ws.send('Hi there, I am a WebSocket server');
    });
}

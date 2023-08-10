
const cortexURL = "wss://localhost:6868"; 
const WebSocket = require('ws');
let ws = new WebSocket(cortexURL);

/*ws.onopen = function (e) {
    alert("[open] Connection established");
    alert("Sending to server");
    ws.send({ "id": 1, "jsonrpc": "2.0", "method": "getCortexInfo" });
};

ws.onmessage = function (event) {
    alert(`[message] Data received from server: ${event.data}`);
};*/

// Handle connection opened
ws.addEventListener("open", (event) => {
    console.log("Connected to the WebSocket API.");
    ws.send({ "id": 1, "jsonrpc": "2.0", "method": "getCortexInfo" });
});

// Handle incoming messages from the server
ws.addEventListener("message", (event) => {
    const message = event.data;
    console.log("Received message from server:", message);
    // Handle the incoming data from the server.
});

// Handle connection closed
ws.addEventListener("close", (event) => {
    console.log("Connection closed.", event);
});

// Handle errors
ws.addEventListener("error", (error) => {
    console.error("WebSocket error:", error);
});
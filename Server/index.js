const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am Santosh Khatri");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));
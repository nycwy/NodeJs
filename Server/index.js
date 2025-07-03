// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// function myHandler(req, res) {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile('log.txt', log, (err, data) => {
//         switch (myUrl.pathname) {
//             case "/":
//                 if(req.method === 'GET') res.end("HomePage");
//                 break;
//             case "/about":
//                 const username = myUrl.query.myname;
//                 res.end(`Hi ${username}`);
//                 break;
//             case "/signup":
//                 if (req.method === 'GET') res.end("This is a signup form");
//                 else if(req.method === 'POST'){
//                     // DB Query
//                     res.end("Success");
//                 }
//             default:
//                 res.end("404 Not Found");
//         }
//     });
// }

// const myServer = http.createServer(myHandler);
// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started!"));


// Using Express
const express = require('express');
const app = express(); // app = handler function

app.get('/', (req, res) => {
    return res.send('Hello from homepage');
});

app.get('/about', (req, res) => {
    return res.send('Hello from about page' + ' Welcome ' + req.query.name + ' You are ' + req.query.age + ' years old');
});

app.listen(8000, () => console.log("Server Started!"));
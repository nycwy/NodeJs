const fs = require('fs'); //built in node js module

//Sync... Blocking...
// fs.writeFileSync('./test.txt', "Hey there");

//Async Non-Blocking...
// fs.writeFile('./test.txt', "Hello world! async", (err) => { });


// Sync.. task return the result
// let result = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(result);

// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if(err) {
//         console.log("Error ", err);
//     }else{
//         console.log(result);
//     }
// })

// append file
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());

// copy file
// fs.cpSync('test.txt', 'copy.txt');

//delete file
// fs.unlinkSync('./copy.txt')

// status checks
// console.log(fs.statSync('./test.txt'));

// Blocking...
// console.log("1");
// let res = fs.readFileSync('contact.txt', 'utf-8');
// console.log(res);
// console.log("2");
// output for above code will be:
// - 1
// - res_data...
// - 2

// Non - Blocking
// console.log('1')
// fs.readFile('contact.txt', 'utf-8', (err, res) => {
//     console.log(res);
// })
// console.log('2')
// output for above code will be:
// - 1
// - 2
// - res_data...


const os = require('os');
console.log(os.cpus().length);
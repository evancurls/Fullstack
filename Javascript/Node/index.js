import generateName from "sillyname";

var sillyname = generateName();

console.log("My name is " + sillyname);

// const fs = require('node:fs');
// const { open } = require('node:fs/promises');

// //import { writeFile } from 'node:fs';
// //import { Buffer } from 'node:buffer';

// const myMessage = "Hello!!";

// const ACTIVE_FILE = '/Users/evaninrig/Developer/Webcourse/Javascript/Node/test.txt';
// // fs.writeFile(ACTIVE_FILE, myMessage, err => {
// //     if (err){
// //         console.error(err);
// //     } else {
// //         console.log("Message saved successfully!");
// //     }
// // });

// fs.readFile(ACTIVE_FILE, "utf8", (err,data) => {
//     if(err){
//         console.error(err);
//     } else {
//         console.log(data)
//     }
// });
// // (async () => {
// //   const file = await open(ACTIVE_FILE);

// //   for await (const line of file.readLines()) {
// //     console.log(line);
// //   }
// // })();
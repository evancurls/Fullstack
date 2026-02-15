/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image';
import { input } from '@inquirer/prompts';
import fs from 'fs'

let userInput = await input({ message: 'Enter desired URL:' });
while(!isValidURL){
    let userInput = await input({ message: 'Invalid URL:' });
}
const url = userInput.URL;

let qr_img = qr.image(userInput);
qr_img.pipe(fs.createWriteStream('qr_img.png'));

const ACTIVE_FILE = '/Users/evaninrig/Developer/Webcourse/Javascript/Node/2.4QR/qr_url.txt';
fs.writeFile(ACTIVE_FILE, userInput, err => {
    if (err){
        console.error(err);
    } else {
        console.log("Message saved successfully!");
    }
});


function isValidURL(string){
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}


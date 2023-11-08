const fs = require('fs');
const dotenv = require('dotenv');
const { create } = require('./message');
dotenv.config();

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    console.log(`Results have been written to ${fileName}`);
    });
}

const name = process.env.NAME;
const number = process.env.NUMBER;
const message = create(name, number);

writeToFile('result.txt', message);

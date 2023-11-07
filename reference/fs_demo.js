//https://nodejs.org/dist/latest-v21.x/docs/api/fs.html

const fs = require('fs')
const path = require('path')

// create a folter
// please delete the directory first ( if it already exists)

// fs.mkdir(path.join(__dirname, 'test02'), {}, err => {
//     if(err) throw err;
//     console.log("Folder created...");
// })

// create and write to file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
"Hello World!", 
err => {
    if(err) throw err;
    console.log('file written to...');
})

// file append

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
" I like node js", 
err => {
    if(err) throw err;
    console.log('file written to...');
})


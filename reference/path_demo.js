const path = require('path');
// https://nodejs.org/dist/latest-v21.x/docs/api/path.html

// base file name 
console.log(__filename);// C:\Users\Luciano's i5 Desktop\Desktop\website\TheOdinProject\nodejs\crash_course_traversymedia\reference\path_demo.js

console.log(path.basename(__filename));// path_demo.js
console.log(path.basename(__dirname));// reference
console.log(path.dirname(__filename));// C:\Users\Luciano's i5 Desktop\Desktop\website\TheOdinProject\nodejs\crash_course_traversymedia\reference
console.clear();
// base file/ directory name
console.log(path.basename('tstes/atse/de.sh'));// de.sh
console.log(path.basename('tstes/atse/de.sh', '.sh'));// de.sh

// file extension
console.log(path.extname(__filename)); //.js

// create path object 
console.log(path.parse(__filename));
/*{
    root: 'C:\\',
    dir: "C:\\Users\\Luciano's i5 Desktop\\Desktop\\website\\TheOdinProject\\nodejs\\crash_course_traversymedia\\reference",
    base: 'path_demo.js',
    ext: '.js',
    name: 'path_demo'
  }

  */

console.log(path.parse(__dirname));
/*
{
  root: 'C:\\',
  dir: "C:\\Users\\Luciano's i5 Desktop\\Desktop\\website\\TheOdinProject\\nodejs\\crash_course_traversymedia",
  base: 'reference',
  ext: '',
  name: 'reference'
}

*/
// part of the object
console.log(path.parse(__dirname).base); // reference

// concatenate paths 
//e.g.// ../test/hello.html
console.log((path.join(__dirname, 'test', 'hello.html')));//C:\Users\Luciano's i5 Desktop\Desktop\website\TheOdinProject\nodejs\crash_course_traversymedia\reference\test\hello.html
console.log((path.join(__dirname, 'test', 'hello.html', 'test', 'test',  'end')));// ...symedia\reference\test\hello.html\test\test\end
const url = require('url')
//https://nodejs.org/dist/latest-v21.x/docs/api/url.html
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// serialized url 

console.log(myUrl.href); // http://mywebsite.com:8000hello.html?id=100&status=active
console.log(myUrl.toString()); // http://mywebsite.com:8000/hello.html?id=100&status=active

// host (root domain) 

console.log(myUrl.host);// mywebsite.com:8000

// / hostname

console.log(myUrl.hostname);// mywebsite.com


// pathname 

console.log(myUrl.pathname);///hello.html

// serialized query

console.log(myUrl.search); // ?id=100&status=active

// params objedt 
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }

// add params 
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams); //URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' 

// loop through params

myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));

/*
id : 100
status : active
abc : 123
*/
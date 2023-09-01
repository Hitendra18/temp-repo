const http = require("http");
const _ = require("lodash");

const arr = [1, [2, [3, [4, [5, 6]]]], 7, [8, 9]];
const arr2 = _.flattenDeep(arr)
console.log(arr2);

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write(`<h1>This is the home page.</h1>`);
//     res.end();
//   } else if (req.url === "/hi") {
//     res.write(`Hello how are you doing?`);
//     res.end();
//   }
//   res.write(`This does not exist`);
//   res.end();
// });

// server.listen(3000);

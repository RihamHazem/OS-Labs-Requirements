const fs = require('fs');

console.log('Testign Sync');
/***    TODO1 BEGIN:
 * Call Syncronous function that read text file contents [readFileSync]
 * enclose your code in try-catch.
 * If an error happened show it using console.error
 * else show the contents of the file using console.log
 * 
 * Questions:
 * 
 * Compare between Sync and Async functions
 */




 /***    TODO1 END **/

console.log('after sync');





console.log('---------------------');
console.log('Testign Async');

var cb = function (err, data) {
  if (err) return console.error(err);
  console.log(data);
};

//    TODO2 BEGIN:
// Opent Text File text.txt and send cb function as callback

//    TODO2 END

console.log('after async');


/************************************************************************
 *******************************   @TODO  *******************************
 * Write four functions f1,f2,f3,f4 each of them uses timeout function where the callback functions contain
 * one console.log line . The names of the callback functions in order should be one(), two(), three(), four()
 * Function one() should also returns string "Hello world" after calling the the callback function.
 * the timeout duration are in order 2000 , 10000 , 500 , 100
 * Execute the code.
 * 1- What is the order of calling in the main?
 * 2- What is the order of execution?
 * 3- what is the value shown by the first line in the start function? why isn't it "Hello World"
 */

/*******************************   @TODO Ends  *******************************/

function start() {
    console.log(f1())
    f2()
    f3()
    f4()
};

start();

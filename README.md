# Example repo demonstrating async - await

### What is async - await used for?
 > The purpose of async/await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises. Just like Promises are similar to structured callbacks, async/await is similar to combining generators and promises.


### Where/How can I use async functionality 

* Node v7.6.0 and onwards...

* Typescript

* babel - specify the preset es2017

### Why should I use it?

1 Concise and clean
* We don’t have to write .then 
* create an anonymous function to handle the response, 
* or give a name data to a variable that we don’t need to use. 
* Also avoids nesting our code. 


2 Error handling
* Async/await makes it finally possible to handle both synchronous and asynchronous errors with the same construct, good old try/catch 



3 Conditionals
* Imagine some code, which fetches some data and decides whether it should return that or get more details based on some value in the data.

4 Intermediates
* where you call a promise1 and then use what it returns to call promise2, then use the results of both promises to call a promise3. 

5 Error Stacks 
* Much easier to pinpoint an error

6 Debugging
* If you set a breakpoint inside a .then block and use debug shortcuts like step-over, the debugger will not move to the the following .then because it only “steps” through synchronous code.
* With async/await you can step through await calls exactly as if they were normal synchronous calls.
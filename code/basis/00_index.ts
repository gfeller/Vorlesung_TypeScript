// Static type-checking
const message = "hello!";
message(); // This expression is not callable


// Non-exception Failures
const user = {
    name: "Daniel",
    age: 26,
};
user.location; // returns undefined

const announcement = "Hello World!";
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
// We probably meant to write this...
announcement.toLocaleLowerCase();
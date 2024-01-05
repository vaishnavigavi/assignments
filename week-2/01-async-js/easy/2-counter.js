
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

function counter(sec) {
    console.log(sec++);
    setTimeout(()=>counter(sec),1000)
}
counter(0)
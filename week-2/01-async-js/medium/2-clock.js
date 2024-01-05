// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
    console.clear();
    let time=new Date();
    let hour= time.getHours();
    hour=hour<10?`0${hour}`:hour
    let minute=time.getMinutes();
    minute=minute<10?`0${minute}`:minute
    let second=time.getSeconds()
    second=second<10?`0${second}`:second
    if(hour>=12){
        console.log(`${hour}:${minute}:${second} PM`);
    }
    else{
        console.log(`${hour}:${minute}:${second} AM`)
    }
}, 1000);
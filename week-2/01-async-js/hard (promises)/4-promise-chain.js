/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1009)
    })

}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1009)
    })

}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1009)
    })

}

function calculateTime(t1, t2, t3) {
    let start=new Date();
    let starttime=start.getTime()
    return new Promise((resolve) => {
        wait1(t1).then(()=>{
            return wait2(t2)
        }).then(()=>{
            return wait3(t3)
        }).then(()=>{
            resolve((new Date()).getTime()-starttime)*1000;
                
            
        })
        
    })

}

module.exports = calculateTime;

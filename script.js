const promiseMain = new Promise((resolve) => {
    setTimeout(
        () => resolve('BEER'),
        1000
    )
})

console.log(typeof promiseMain)
console.log(promiseMain instanceof Object)
console.log(promiseMain instanceof Promise)
console.log(promiseMain)

// if we do not pass a callback, promise returned from then
// will resolve to the same value as main promise
const promise1 = promiseMain.then()
// if we do pass a callback, promise returned from then
// will resolve to the value returned form callback
const promise2 = promiseMain.then((value) => {
    console.log(value)
    return value + '!!!'
})
// if the value returned form callback is a promise
// promise returned from then will resolve to the value 
// to which this promise will resolve
const promise3 = promiseMain.then(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve('HELLO'),
            5000
        )
    })
})

console.log(promise1)
console.log(promise2)
console.log(promise3)
// then method return new promise instance
console.log(promiseMain === promise1)
console.log(promise1 === promise2)
console.log(promise2 === promise3)
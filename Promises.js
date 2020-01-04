// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(Promise.resolve(Promise.reject(Promise.resolve('resolved'))))
//     }, 2000);
// }).then(data => {
//     console.log(data);
// }).catch(data => {
//     console.log(data,'===========')
// }).then(data => {
//     console.log(data)
// })


// const promise = new Promise(res, rej)

// Promise.reject(3).catch(data => dataasd()).then(data => console.log(data)).catch(data => console.log(data,'asdasd'))

const thenable = {
    then(s, f){
        setTimeout(() => {
            s('rejected')
        }, 1000);
    }
}

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        rej(Promise.resolve('resolved'))
        // rej(thenable)
        // res(Promise.reject('rejected'))
        // res(thenable)
    },1000)
})

promise.catch(data => {
    console.log(data,'====')
    return dataas;
}).then(data => {
    console.log(data)
}).catch(data => {
    console.log(data)
})
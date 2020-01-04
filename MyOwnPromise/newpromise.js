// const p1 = new Promise((res, rej) => setTimeout(() => res(),2000))
// const p2 = new Promise((res, rej) => setTimeout(() => rej(),2000))
// const p3 = new Promise((res, rej) => setTimeout(() => res(),4000))


// Promise.allSettled([p1, p2, p3]).then(data => data.forEach(datas => {
//     console.log(datas)
// }))

const x = {
    y: {
        // console.log(this)
        z: function(){
            console.log(this,'=====')
        }
    }
}

x.y.z()
// const temp = x.y;
// temp()
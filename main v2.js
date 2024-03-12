// fetch('readme1.txt').then((Response) => {
//     console.log(Response)
//     console.log(Response.status)
//     return Response.text()
// }).then(data => {
//     console.log(data);
// }).catch( err => {
//     console.log('Error:' , err)
// }).finally(()=>{
//     console.log(" in Finally")
// })
// console.log('Any other function')
let allData = ''


fetch('readme1.txt')
.then(response => resp.text())
.then( data => {
    allData += data
})

console.log('Any other function')
setTimeout(() => {
console.log('allData =' , allData)
},200)
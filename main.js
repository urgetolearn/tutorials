const fs = require("fs")
// console.log(fs)
console.log("start")
//fs.writeFileSync("chin.txt", "Chinmayi is a good girl")

fs.writeFile("chin2.txt","Chinmayi is a good girl", ()=>{
    console.log("done")
    fs.readFile("chin2.txt",(error, data)=>{
        console.log(error, data.toString())
    })
})
fs.appendFile("chin2.txt","it will be ok ", (e,d)=>{
    console.log(d)
})
console.log("end")
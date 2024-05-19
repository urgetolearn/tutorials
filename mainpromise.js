import fs from "fs/promises"
let a = await fs.readFile("chin.txt")
let b = await fs.appendFile("chin.txt", "\n\n\nthis is amazing promise")
console.log(a.toString(),b)
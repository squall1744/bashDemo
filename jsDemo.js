const fs = require('fs')

let dirName = process.argv[2] 

fs.mkdirSync("./" + dirName) 
process.chdir("./" + dirName) 
fs.mkdirSync('css')
fs.mkdirSync('js')

fs.writeFileSync("./index.html", 
`<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>`)
fs.writeFileSync("./css/style.css", `h1{color: red;}`)
fs.writeFileSync("./js/main.js", 
`let string =  "Hello world"
alert(string)`)

process.exit(0)

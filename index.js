import { createServer } from "http"

console.log("ingresando a app")
const PORT= process.env.PORT || 3300
const server=createServer((req,res)=>{
	console.log("peticion recibida")
	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.write('Hello World!')
  	res.end()
})

server.listen(PORT, function (){
	console.log("servidor escuchando puerto ", PORT)
})
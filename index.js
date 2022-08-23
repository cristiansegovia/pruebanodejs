console.clear();
import { createServer } from "http";

const server=createServer((req,res)=>{
	console.log("peticion recibida");
	res.end("recibida colega");
});

server.listen(4000);
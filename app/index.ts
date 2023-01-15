import * as http from "node:http"
import {requestHandler} from "./handlers/handler.js";


console.log(requestHandler)

const server = http.createServer(requestHandler)

server.listen({
    host: 'localhost',
    port: 4000},()=> {
    console.log(`server is listening on http://localhost:4000`);

})


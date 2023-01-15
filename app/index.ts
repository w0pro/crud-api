import * as http from "node:http"
import {requestHandler} from "./handlers/handler.js";
import * as dotenv from 'dotenv'
dotenv.config()





const server = http.createServer(requestHandler)

server.listen({
    host: 'localhost',
    port: process.env.PORT},()=> {
    console.log(`server is listening on http://localhost:${process.env.PORT}`);

})


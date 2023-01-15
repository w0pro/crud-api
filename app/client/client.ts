import * as readline from 'node:readline';
import {stdin as input, stdout as output} from "node:process";
const rl = readline.createInterface({ input, output });
import {requestsMethods} from "./requests.js";




rl.on('line', (input) => {
    const inp = input.split(' ')
    const response =  requestsMethods[inp[0]](inp[1])
    response.then(data=> console.log(data))

});

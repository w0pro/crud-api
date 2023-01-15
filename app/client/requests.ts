import * as dotenv from 'dotenv'
dotenv.config()

export const requestsMethods = {
    GET: async (param) => {
        // const req = param.split('/');
        // let result;
        // if (req[req.length - 1] !== 'users') {
         const result = await fetch(`http://localhost:${process.env.PORT}/${param}`);
        // } else {
        //     result = await fetch(`http://localhost:${process.env.PORT}/api/users/`);
        // }


        return result.text()
    }
}

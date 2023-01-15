export let users = {1: {
    name: 'Yan',
        age: 28
    },
    2: {
        name: 'Alina',
        age: 25
    }
};

export const requestHandler = (request, response) => {
    console.log(request.url.split('/'))

    const a = request.url.split('/')

    if (request.url === '/api/users') {

     } else if(users[a[a.length -1]]) {
        response.write('status 200\n' )
        response.end(JSON.stringify(users[a[a.length -1]]))

    } else {
        response.end('Hello Node.js Server!')
    }

}

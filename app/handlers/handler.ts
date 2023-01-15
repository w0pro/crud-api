export let users = [];

export const requestHandler = (request, response) => {

    console.log(request.url)
    if (request.url === '/api/users') {
        users.push({'id':1,
            'name': 'yan',
            'age': 27,
            'hobbies': ['dssd','dsfdsfd']})
        response.end(JSON.stringify(users))
    }
    response.end('Hello Node.js Server!')
}

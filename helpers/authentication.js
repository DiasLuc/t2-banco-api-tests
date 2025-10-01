const request = require('supertest');


const getToken = async (username, password) => {
    const loginResponse = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': username,
            'senha': password
        });
    return loginResponse.body.token;  
}

module.exports = {
    getToken
}
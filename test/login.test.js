const request = require('supertest');
const { expect } = require('chai');

describe('Login', () => {
    describe('POST /login', () => {
        it('Should return 200 with a string token when using valid credentials', async () => {
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            
            expect(response.statusCode).to.equal(200)
            expect(response.body.token).to.be.a('string')
        })
    })
})
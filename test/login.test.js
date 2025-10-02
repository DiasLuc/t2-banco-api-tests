const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

describe('Login', () => {
    describe('POST /login', () => {
        it('Should return 200 with a string token when using valid credentials', async () => {
            const bodyLogin = { ...postLogin };
            const response = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
            
            expect(response.statusCode).to.equal(200)
            expect(response.body.token).to.be.a('string')
        })
    })
})
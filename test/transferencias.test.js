const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { getToken } = require('../helpers/authentication.js');



describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token;
        beforeEach(async () => {
            token = await getToken('julio.lima', '123456');
        });

        it('Should return success with 201 when transfer amount is greater than or equal to $10.00', async () => {
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 10.00,
                    token: ""
                });

            expect(response.status).to.equal(201);
        });

        it('Should return failure with 422 when transfer amount is less than $10.00', async () => {
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9.99,
                    token: ""
                });

                expect(response.status).to.equal(422);
        });
    });
});
const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { getToken } = require('../helpers/authentication.js');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {
    let token;
    beforeEach(async () => {
        token = await getToken('julio.lima', '123456');
    });
    
    describe('POST /transferencias', () => {

        it('Should return success with 201 when transfer amount is greater than or equal to $10.00', async () => {
            const bodyTransferencias = { ...postTransferencias };

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);

            expect(response.status).to.equal(201);
        });

        it('Should return failure with 422 when transfer amount is less than $10.00', async () => {
            const bodyTransferencias = { ...postTransferencias };
            bodyTransferencias.valor = 9.99;

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);

                expect(response.status).to.equal(422);
        });
    });

    describe('GET /transferencias/{id}', () => {
        it('Should return success with status code 200 and data equal to the corresponding transfer in the database when the ID is valid', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias/18')
                .set('Authorization', `Bearer ${token}`)

            console.log(response.body);
            console.log(response.status);

            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(18);
            expect(response.body.id).to.be.a('number');
            expect(response.body.conta_origem_id).to.equal(1);
            expect(response.body.conta_destino_id).to.equal(2);
            expect(response.body.valor).to.equal(10.00);
        });
    });

    describe('GET /transferencias', () => {
        it('Should return 10 elements in page when limit of 10 is passed in.', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)
            if (response.body.total >= 10) {
                expect(response.body.transferencias).to.have.lengthOf(10);
            } else{
                expect(response.body.transferencias).to.have.lengthOf(response.body.total);
            }
            expect(response.status).to.equal(200);
        });
    });
});
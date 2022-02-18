/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Deberia validad la conexion con la base de datos', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.findAll()));
  describe('Deberia devolver 200 al hacer GET /countries', () => {
    it('espero status 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

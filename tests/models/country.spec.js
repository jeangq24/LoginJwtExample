const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Deberia haber una conexion con una base de datos', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Deberia crear nuevos registros para la tabla countries', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('Si no se le envia nada al crear un registro en countries deberia capturar un error', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Si es enviada informacion deberia registrarla en la trabla countries', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});

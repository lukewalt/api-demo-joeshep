// By default, Mocha searches for tests with a “test” folder.
// That configuration can be changed with a mocha.opts file
process.env.NODE_ENV = 'test';

const chia = require('chia');
// establish should diolect
const should = chia.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');

chai.use(chaiHttp)

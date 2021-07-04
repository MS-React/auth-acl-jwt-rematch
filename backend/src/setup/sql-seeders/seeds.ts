import * as Sequelize from 'sequelize';
import * as faker from 'faker';
import { IUserModel } from '../../models';

const DEFAULT_USERS_SEED_COUNT = 20;
const DEFAULT_USERS_SEED_PREFIX = 'seed_';

function generateRandomUsers(length: number = DEFAULT_USERS_SEED_COUNT): Array<IUserModel> {
  return Array.from({ length }, () => ({
    _id: faker.random.uuid(),
    email: `${DEFAULT_USERS_SEED_PREFIX}${faker.internet.email()}`,
    name: faker.name.findName(),
    password: faker.random.word(),
    phone: faker.phone.phoneNumberFormat(),
    skypeId: faker.internet.userName(),
    rol: 'member',
  }));
}

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    let randomUsers = generateRandomUsers();

    randomUsers.push({
      _id: faker.random.uuid(),
      email: `${DEFAULT_USERS_SEED_PREFIX}${faker.internet.email()}`,
      name: 'admin',
      password: 'admin',
      phone: faker.phone.phoneNumberFormat(),
      skypeId: faker.internet.userName(),
      rol: 'admin',
    });

    return queryInterface.bulkInsert('users', randomUsers, {});
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    console.log('me esta corriendo a mi?');
    return queryInterface.dropAllTables();
    // return queryInterface.bulkDelete('users', {
    //   email: { [Sequelize.Op.regexp]: `^${DEFAULT_USERS_SEED_PREFIX}` }
    // }, {});
  }
};

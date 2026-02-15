import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('shop',
    'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

export { sequelize }
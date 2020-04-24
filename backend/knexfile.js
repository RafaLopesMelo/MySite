// Update with your config settings.

require('dotenv-safe').config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: "./src/database/migrations"
    },
    seeds: { directory: './src/database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: "./src/database/migrations"
    },
    seeds: { directory: './src/database/seeds' },
  }

};

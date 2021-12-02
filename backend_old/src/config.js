// Check for mandatory environment variables
const required = [
    'DB_HOST',
    'DB_USER',
    'DB_PASSWORD',
    'DB_NAME',
    'DB_PORT'
  ];

  required.forEach(param => {
    if (!process.env[param]) {
      throw new Error(`Environment parameter ${param} is missing`);
    }
  });

  const config = {
    // database
    database: {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
      port: process.env.DB_PORT
    }
  };
  
  module.exports = config;
// Check for mandatory environment variables
const required = [
    'DB_HOST',
    'DB_USERNAME',
    'DB_PASSWORD',
    'DB_DATABASE',
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
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_DATABASE,
      port: process.env.DB_PORT
    }
  };
  
  module.exports = config;
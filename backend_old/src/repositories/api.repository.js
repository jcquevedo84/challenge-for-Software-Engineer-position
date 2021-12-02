const MongoRepository = require('./mongo.repository');
const config = require('../config');

let base = null;

class ApiRepository {
  /**
   * Connect to database and set pool
   */
  static connect() {
    const { host, username, password, name, port} = config.database;
    base = new MongoRepository(host, username, password, name, port);
    base.connect();
  }

  
}

module.exports = ApiRepository;

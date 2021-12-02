const mongo = require("mongoose");
mongo.Promise = global.Promise;

class MongoRepository {
    constructor(host, user, pass, name, port) {
        this.host = host;
        this.user = user;
        this.pass = pass;
        this.name = name;
        this.port = port;
        this.pool = null;
      }

      connect() {

        const url = `mongodb://${this.user}:${this.pass}@${this.host}:${this.port}/${this.name}?authSource=admin`;
        console.log("final url: "+url)
        this.pool = mongo.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        }).then(() => {
            console.log("Connected to the database!");
        })
        .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
        });
      
    }
}

module.exports = MongoRepository;
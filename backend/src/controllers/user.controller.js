class UserController {

    static async postUser(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async postSignin(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async getUser(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async getUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async putUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async deleteUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

}

module.exports = UserController;
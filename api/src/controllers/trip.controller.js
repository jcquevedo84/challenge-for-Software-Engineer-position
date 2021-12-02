class tripController {
    

    static async postTrip(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async getTrip(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

}

module.exports = tripController;
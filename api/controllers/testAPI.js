const request = require("request");

module.exports = {
    show
}

async function show (req, res) {
    request(
        "https://api.coindesk.com/v1/bpi/currentprice.json",
        function(err, response, body) {
            let data = JSON.parse(body);
            res.send(data);
        }
    );
}
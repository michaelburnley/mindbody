const soap = require('soap');
const base_url = process.env.MINDBODY_BASE_URL;

const soapClient = (service) => {
    let url = base_url + '/' + service + '.asmx';
    let wsdl = '?wsdl';
    return new Promise((resolve, reject) => {
        return soap.createClient(url + wsdl, (err, client) => {
            if (err) {
                console.log(err);
            }
        
            client.setEndpoint(url);
            return resolve(client);
        })
    })
}

module.exports = soapClient;
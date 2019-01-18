const SoapClient = require('./src/soapClient');
const request = require('./data/headers');

const clients = {
    client: '',
    class: '',
    payment: '',
    sale: '',
    site: '',
    staff: '',
    users: ''
};

const CreateClients = () {

}

const Configure = ({
    siteID,
    sourceName,
    sourcePassword,
}) => {
    let headers = request(siteID, sourceName, sourcePassword);
    let keys = Object.keys(clients);
    keys.forEach((key) => {
        clients[key] = CreateClients()
    });
}

module.exports = {
    config:  Configure,
    client: clients
};
const soap = require('./soapClient');
const apiUrl = "PaymentService";
const args = {};

const buildArguments = (siteID) => {
    let params = {
        "Request": {
            "Content-Type": "application/json",
            "API-key": process.env.MINDBODY_API_KEY,
            "SourceCredentials": {
                "SourceName": process.env.MINDBODY_SOURCE_NAME,
                "Password": process.env.MINDBODY_PASSWORD,
                "SiteIDs": {
                    "int": siteID
                }
            },
            "UserCredentials": {
                "SiteIDs": {
                    "int": siteID
                },
                "Username": process.env.MINDBODY_STAFF_USER,
                "Password": process.env.MINDBODY_STAFF_PASSWORD
            }
        }
    }
    return params;
}

const purchase = async (purchaseData) => {
    let client = await soap(service);
    return new Promise ((resolve, reject) => {
        client.GetRequiredClientFields(args, (err, result) => {
            if(err) {
                console.log(err);
            }
            return resolve(result['GetRequiredClientFieldsResult']['RequiredClientFields'].string);
        })
    });
}

module.exports.purchase = purchase;
module.exports.buildArguments = buildArguments;
const soap = require('./soapClient');
const service = "ClassService";
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

const getClasses = async (params) => {
        let client = await soap(service);
        return new Promise ((resolve, reject) => {
            client.GetClasses(params, (err, result) => {
                if(err) {
                    console.log(err);
                }
                return resolve(result['GetClassesResult']['Classes']);
            })
        });
}

const getCourses = async (params) => {
    let client = await soap(service);
    return new Promise ((resolve, reject) => {
        client.GetCourses(params, (err, result) => {
            if(err) {
                console.log(err);
            }
            return resolve(result['GetCoursesResult']['Classes']);
        })
    });
}

const addClientToClass = async (params) => {
    let client = await soap(service);
    return new Promise ((resolve, reject) => {
        client.AddClientsToClass(params, (err, result) => {
            if(err) {
                console.log(err);
            }
            return resolve(result['AddClientsToClassResult']);
        })
    });
}

module.exports.getClasses = getClasses;
module.exports.addClientToClass = addClientToClass;
module.exports.buildArguments = buildArguments;
module.exports.getCourses = getCourses;
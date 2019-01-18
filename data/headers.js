const request = {
    "Request": {
        "Content-Type": "application/json",
        "API-key": process.env.MINDBODY_API_KEY,
        "SourceCredentials": {
            "SourceName": process.env.MINDBODY_SOURCE_NAME,
            "Password": process.env.MINDBODY_SOURCE_PASSWORD,
            "SiteIDs": {
                "int": siteID
            }
        },
        "UserCredentials": {
            "SiteIDs": {
                "int": siteID
            },
            "Username": process.env.MINDBODY_STAFF_USER,
            "Password": process.env.MINDBODY_STAFF_PASSWORD,
        }
    }
}

const createRequest = (siteID, sourceName, sourcePassword) => {
    let args = request;
    
}

module.exports = createParams;
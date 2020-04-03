require('dotenv').config();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": process.env.DB_URL,
    "accessKeyId": process.env.ACCESS_KEY_ID, "secretAccessKey": process.env.SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "foods",
        Key: {
            "Name": "Course 1"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}
fetchOneByKey();
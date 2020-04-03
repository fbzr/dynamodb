require('dotenv').config();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": process.env.DB_URL,
    "accessKeyId": process.env.ACCESS_KEY_ID, "secretAccessKey": process.env.SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let remove = function () {
    var params = {
        TableName: "users",
        Key: {
            "email_id": "example@gmail.com"
        }
    };
    docClient.delete(params, function (err, data) {
        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success");
        }
    });
}
remove();
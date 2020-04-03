require('dotenv').config();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": process.env.DB_URL,
    "accessKeyId": process.env.ACCESS_KEY_ID, "secretAccessKey": process.env.SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let modify = function () {
    var params = {
        TableName: "users",
        Key: { "email_id": "example-1@gmail.com" },
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"
    };
    docClient.update(params, function (err, data) {
        if (err) {
            console.log("users::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::update::success "+JSON.stringify(data) );
        }
    });
}
modify();
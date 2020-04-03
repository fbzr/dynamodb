require('dotenv').config();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": process.env.DB_URL,
    "accessKeyId": process.env.ACCESS_KEY_ID, "secretAccessKey": process.env.SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let save = function () {
    var input = {
        "Name": "Course 2 from server", "email_id": "example-1@gmail.com", "created_by": "clientUser", "created_on": new Date().toString(),
        "updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
    };
    var params = {
        TableName: "foods",
        Item:  input
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}
save();
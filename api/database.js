const AWS = require('aws-sdk');
const config = require('./config');

module.exports = new AWS.DynamoDB.DocumentClient(config.database);
const db = require('./database');
const { features: { tableName } } = require('./config');

module.exports.create = ({ name, enabled = false }) => {
  return db.put({
    TableName: tableName,
    Item: {
      name: name,
      enabled: enabled,
    }
  }).promise();
};

module.exports.list = async () => {
  const response = await db.scan({
    TableName: tableName,
  }).promise();
  return response.Items;
};

module.exports.delete = (name) => {
  return db.delete({
    TableName: tableName,
    Key: {
      "name": name,
    },
  }).promise();
};

module.exports.update = (name, enabled) => {
  return db.update({
    TableName: tableName,
    Key: {
      "name": name,
    },
    UpdateExpression: "set enabled = :t",
    ExpressionAttributeValues:{
      ":t": enabled,
    },
    ReturnValues:"UPDATED_NEW"
  }).promise();
};
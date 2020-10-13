const db = require('../database');
const { features: { tableName } } = require('../config');

module.exports.resetDb = async () => {
  const data = await db.scan({ TableName: tableName }).promise();
  await Promise.all(data.Items.map(async (item) => {
    await db.delete({
      TableName: tableName,
      Key: {
        "name": item.name,
      },
    }).promise();
  }));
}
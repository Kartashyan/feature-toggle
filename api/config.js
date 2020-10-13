const all = {
  prod: {},
  dev: {},
  test: {
    database: {
      region: 'local',
      endpoint: 'http://localhost:8000',
    },
  },
};

module.exports = {
  ...all[process.env.STAGE],
  ...{
    features: {
      tableName: process.env.FEATURES_TABLE,
    }
  }
};
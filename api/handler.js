'use strict';

const features = require('./features');

module.exports.createFeature = async event => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: "No data provided"
    }
  }
  else {
    const feature = JSON.parse(event.body);
    if (!feature.name) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: "No feature name provided"
      }
    } else {
      await features.create(feature);

      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          message: 'Success!'
        })
      }
    }
  }
};

module.exports.listFeatures = async () => {
  const featuresList = await features.list();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(featuresList, null, 2),
  };
}

module.exports.deleteFeature = async event => {
  const { name } = event.pathParameters;
  await features.delete(name);
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ message: 'Deleted!' }),
  };
}

module.exports.updateFeature = async event => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: "No data provided"
    }
  }
  else {
    const { name } = event.pathParameters;
    const feature = JSON.parse(event.body);
    if (typeof feature.enabled === 'undefined') {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: "No feature state provided"
      }
    } else {
      await features.update(name, feature.enabled);
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          message: 'Updated!'
        })
      }
    }
  }
}
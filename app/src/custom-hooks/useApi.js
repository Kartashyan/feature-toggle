import { useState } from 'react';

export const apiUrl = 'https://mmcq21v28g.execute-api.eu-central-1.amazonaws.com/dev/features';

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let response = null;

  async function makeCall(callFunc, options, defaultResponse = []) {
    setLoading(true);
    setError(null);
    try {
      const result = await callFunc(options.pathParam, options.data);
      const json = await result.json();
      response = json;
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      return defaultResponse;
    }

    return response;
  }


  const doGet = (pathParam) => makeCall(getCall, { pathParam });
  const doPost = (data, pathParam) => makeCall(postCall, { pathParam, data });
  const doDelete = (pathParam) => makeCall(deleteCall, { pathParam });
  const doUpdate = (data, pathParam) => makeCall(updateCall, { pathParam, data });


  return { error, loading, doGet, doPost, doDelete, doUpdate };
}

//helpers

function updateCall(pathParam, data) {
  return fetch(`${apiUrl}/${pathParam}`, {
    method: "PUT",
    body: JSON.stringify(data)
  });
}

function deleteCall(pathParam) {
  return fetch(`${apiUrl}/${pathParam}`, {
    method: "DELETE",
  });
}

function postCall(pathParam = '', data) {
  return fetch(`${apiUrl}/${pathParam}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

function getCall(pathParam = '') {
  return fetch(`${apiUrl}/${pathParam}`);
}

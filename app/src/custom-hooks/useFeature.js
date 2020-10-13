import { useContext } from 'react';
import useApi from './useApi';
import { FeatureContext } from '../Context';

export default function useFeature() {
  const { response, setResponse } = useContext(FeatureContext);
  const { loading, error, doUpdate, doDelete, doPost } = useApi();

  const updateFeatureState = async (checked, name) => {
    let result = await doUpdate({ enabled: checked }, name);
    if (result?.message === 'Updated!') {
      let newData = response.map(feature => feature.name === name ? { ...feature, enabled: checked } : feature);
      setResponse([...newData]);
    }
  };
  const deleteFeature = async (name) => {
    let result = await doDelete(name);
    if (result?.message === 'Deleted!') {
      let newData = response.filter(feature => feature.name !== name);
      setResponse([...newData]);
    }
  };
  const addFeature = async (name) => {
    let result = await doPost({ name });
    if (result?.message === 'Success!' && response.some(feature => feature.name !== name)) {
      let newData = [...response, { name, enabled: false }]
      setResponse([...newData]);
    }
  };

  return { error, loading, updateFeatureState, deleteFeature, addFeature }
}
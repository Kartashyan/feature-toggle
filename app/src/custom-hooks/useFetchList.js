import { useEffect, useContext, useCallback } from "react";
import { FeatureContext } from '../Context';
import useApi from './useApi';

export default function useFetchList() {
  const { setResponse } = useContext(FeatureContext);
  const { loading, error, doGet } = useApi([]);
  // not the best solution
  const fetchFeatures = useCallback(() => doGet(), []);
  useEffect(() => {
    fetchFeatures().then(resp => setResponse(resp));
  }, [fetchFeatures, setResponse]);

  return { error, loading };
};
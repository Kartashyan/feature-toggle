import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddFeatureForm from '../components/AddFeatureForm';
import useFetchList from '../custom-hooks/useFetchList'
import FeatureItem from '../components/FeatureItem';
import { FeatureContext } from '../Context';

export default function Admin() {
  const { response } = useContext(FeatureContext);
  const { loading, error } = useFetchList();
  return (
    <Container maxWidth="sm">
      {loading && <LinearProgress />}
      <h3>Features List</h3>
      {error && <p>Something went wrong...</p>}
      <AddFeatureForm />
      <div data-testid="featuresList">
        {response.map(item => (
          <FeatureItem
            name={item.name}
            error={error}
            enabled={item.enabled}
            key={item.name}
          />
        ))}
      </div>
    </Container>
  );
}

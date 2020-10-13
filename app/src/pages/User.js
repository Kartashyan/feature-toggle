import React, { useContext } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import useFetchList from '../custom-hooks/useFetchList';
import { FeatureContext } from '../Context';

const useStyles = makeStyles({
  root: {
    margin: 12,
  },
});

export default function User() {
  const classes = useStyles();
  const { response } = useContext(FeatureContext);
  const { loading, error } = useFetchList();
  return (
    <Container maxWidth="sm">
      {loading && <LinearProgress />}
      {error && <p>Something went wrong...</p>}
      <div data-testid="featuresList">
        {response
          .filter(item => item.enabled)
          .map(item => (
            <Card className={classes.root} elevation={3} key={item.name}>
              <CardContent>
                <h3>{item.name}</h3>
              </CardContent>
            </Card>
          ))}
      </div>
    </Container>
  );
}

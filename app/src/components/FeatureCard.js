import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    margin: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FeatureCard({ error, name, checked, loading, onChange: handleChange, onDelete: handleDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {error && <p>Something went wrong...</p>}
      <CardContent>
        <h3>{name}</h3>
      </CardContent>
      <CardActions >
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
          name={name}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardActions>
      {loading && <LinearProgress />}
    </Card>
  );
}

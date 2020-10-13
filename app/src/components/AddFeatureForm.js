import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import useFeature from '../custom-hooks/useFeature';


const useStyles = makeStyles({
  root: {
    // maxWidth: 400,
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

export default function AddFeatureForm() {
  const classes = useStyles();
  const [name, setName] = useState('');

  const { error, loading, addFeature } = useFeature();

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleAddFeature = async () => {
    await addFeature(name);
    setName('');
  }

  return (
    <Card className={classes.root}>
      {error && <p>Something went wrong...</p>}
      <CardContent>
        <TextField
          id="standard-full-width"
          value={name}
          onChange={handleChange}
          label="Add feature"
          style={{ margin: 8 }}
          helperText="Type a feature name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </CardContent>

      <CardActions>
        <Button onClick={handleAddFeature} fullWidth variant="contained" color="primary" disabled={!name}>Add Feature</Button>
      </CardActions>
      {loading && <LinearProgress />}
    </Card>
  );
}

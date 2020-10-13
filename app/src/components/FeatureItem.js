import React from 'react';
import FeatureCard from './FeatureCard';
import useFeature from '../custom-hooks/useFeature'

export default function FeatureItem({ name, enabled }) {
  const { error, loading, updateFeatureState, deleteFeature } = useFeature();

  const handleChange = async (event) => {
    const checked = event.target.checked;
    await updateFeatureState(checked, name);
  };

  const handleDelete = async () => {
    await deleteFeature(name);
  }
  return (
    <FeatureCard
      name={name}
      checked={enabled}
      loading={loading}
      error={error}
      onChange={handleChange}
      onDelete={handleDelete}
    />
  );
}

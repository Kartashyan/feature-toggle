import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FeatureCard from './FeatureCard'

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe('FeatureCard component', () => {
  let fakeName = 'fake_feature_name';
  let fakeEnabled = false;
  let loading = false;
  let handleChange = jest.fn();
  let handleDelete = jest.fn();
  it('should render the name and disabled feature toggle', async () => {
    render(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    expect(screen.getByText(fakeName)).toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).not.toBeChecked();
  });

  it('should render enabled feature toggle', async () => {
    fakeEnabled = true;
    render(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    expect(screen.queryByRole('checkbox')).toBeChecked();
  });

  it('should render render Delete button', async () => {
    render(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    expect(screen.queryByText('Delete')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toHaveTextContent('Delete');
  });

  it('should call handleChange when clicking on toggle', async () => {
    render(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    fireEvent.click(screen.queryByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call deleteChange when clicking on delete button', async () => {
    render(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    expect(handleDelete).not.toHaveBeenCalled()
    fireEvent.click(screen.queryByText('Delete'));
    expect(handleDelete).toHaveBeenCalledTimes(1)
  });

  it('should render progressbar depending on loading state', () => {
    const { rerender } = render(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    loading = true;
    rerender(<FeatureCard
      name={fakeName}
      checked={fakeEnabled}
      loading={loading}
      onChange={handleChange}
      onDelete={handleDelete}
    />);
    expect(screen.queryByRole('progressbar')).toBeInTheDocument();
  });
});


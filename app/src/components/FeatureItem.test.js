import React from 'react';
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import FeatureItem from './FeatureItem';

// const mockedFetch = () => Promise.resolve()
function mockedFetch(url) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 100 + Math.random() * 200)
  );
}

describe('FeatureItem component', () => {
  let fakeName = 'fake_feature_name';
  let fakeEnabled = false;

  it('should render the name and disabled feature toggle', async () => {
    jest.spyOn(global, "fetch").mockImplementation(mockedFetch);
    render(<FeatureItem
      name={fakeName}
      checked={fakeEnabled}
    />);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    fireEvent.click(await screen.findByText('Delete'));

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));
  });
});


import React from 'react';

import { ReactComponent as Bar } from '../../assets/Bars-1s-200px.svg';

// import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';
import { SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <Bar />
        {/* <SpinnerContainer /> */}
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

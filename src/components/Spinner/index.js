import React from 'react';
import Loader from 'react-loader-spinner';

import { SpinnerItem } from './styles';

export default function Spinner({ handleMore }) {
  return (
    <SpinnerItem background="/spinner.png" ref={ele => handleMore(ele)}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </SpinnerItem>
  );
}

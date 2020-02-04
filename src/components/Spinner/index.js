import React from 'react';
import Loader from 'react-loader-spinner';

import { SpinnerItem } from './styles';

export default function Spinner({ handleMore, active }) {
  return (
    <SpinnerItem
      active={active}
      ref={item => (handleMore ? handleMore(item) : null)}
    >
      <Loader type="Oval" color="#e74c3c" height={50} width={100} />
    </SpinnerItem>
  );
}

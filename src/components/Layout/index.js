import React from 'react';
import GlobalStyle from '../../../global/styles';

function Layout(props) {
  return (
    <div className="page-layout">
      <GlobalStyle />
      {props.children}
    </div>
  );
}

export default Layout;

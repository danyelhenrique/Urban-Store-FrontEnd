import React from 'react';
import GlobalStyle from '../../../global/styles';

function Layout({children}) {
  return (
    <div className="page-layout">
      <GlobalStyle />
      {children}
    </div>
  );
}

export default Layout;

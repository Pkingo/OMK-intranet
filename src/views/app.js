import React from 'react';
import NavMenu from '../components/navmenu/';

export default ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <NavMenu />
        </div>
        <div className="col-md-10">
          {children}
        </div>
      </div>
    </div>
  );
};

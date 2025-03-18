import React from 'react';

const PageFooter = ({ color }) => {
  return (
    <div className={`mx-11 border-t ${color}`}>
      <div className={`h-8 mx-5 border-x ${color}`} />
    </div>
  );
};
export default PageFooter;

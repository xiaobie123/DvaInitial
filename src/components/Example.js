import React from 'react';
import {FormattedMessage} from 'react-intl';

const Example = ({dispatch}) => {
  return (
    <div>
      <FormattedMessage id="example.test"/>
      {dispatch && <div><br/>This page can get dispatch...</div>}
    </div>
  );
};

Example.propTypes = {
};

export default Example;

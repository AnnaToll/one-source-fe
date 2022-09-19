import React from 'react';

import { styles } from '../styles';

import EmailForm from './EmailForm';

function PugWindow(props) {
  // state

  return (
    <div
      className="transition-5"
      style={{
        ...styles.pugWindow,
        ...{ opacity: props.visible ? '1' : '0' },
      }}
    >
      <EmailForm />
    </div>
  );
}

export default PugWindow;

import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const LHIAlert = ({ color, message }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Alert color={color} isOpen={visible} toggle={onDismiss}>
      {message}
    </Alert>
  );
};

export default LHIAlert;

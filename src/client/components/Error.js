import { Alert } from 'reactstrap';
import React from 'react';

const Error = () => (
  <Alert color="danger" className="error">
    You have not provided required fields
  </Alert>
);

export default Error;

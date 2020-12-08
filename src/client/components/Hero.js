import React from 'react';

import { Card, CardImg, Alert } from 'reactstrap';
import Error from './Error';

const Hero = ({ imageURL }) => (
  <Card className="cardRow">
    {imageURL ? (
      <CardImg width="90%" src={imageURL} className="image" />
    ) : (
      <Error />
    )}
  </Card>
);

export default Hero;

import React from 'react';

import { Card, CardImg } from 'reactstrap';

const Hero = ({ imageURL }) => (
  <Card className="cardRow">
    <CardImg width="90%" src={imageURL} className='image'/>
  </Card>
);

export default Hero;

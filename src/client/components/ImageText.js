import React from 'react';

import { Card, CardImg, CardBody, CardText, CardTitle, Alert } from 'reactstrap';
import Error from './Error';

const ImageText = ({ imageURL, text, title, leftToRight }) => {
  const customStyle = { flexDirection: leftToRight ? 'row' : 'row-reverse' };
  return (
    <Card className="cardRow" style={customStyle}>
      <div className="img-wrapper">
        <CardImg src={imageURL} className="image" />
      </div>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>
          {text}
        </CardText>
      </CardBody>
       {!imageURL && <Error />}
    </Card>
  );
};

export default ImageText;

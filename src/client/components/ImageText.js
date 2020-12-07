import React from 'react';

import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

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
    </Card>
  );
};

export default ImageText;

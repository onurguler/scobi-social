import React from 'react';
import { Card } from 'react-bootstrap';

const TrendItem = () => {
  return (
    <Card className="trend-item bg-dark text-white h-100 mr-sm-0 mr-md-4">
      <div className="overlay">
        <Card.Img
          className="h-100"
          src="https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="Card image"
        />
      </div>
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TrendItem;

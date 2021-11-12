import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Image.css';

export const Hero = () => {
    return (<>
        <Row>
          <Image 
          className={['img-hero']} 
          src="https://static.zennioptical.com/marketing/campaign/rashida_jones/rashida_picks_plp-md.jpg?quality=high"  
          thumbnail />
        </Row>
      </>);
};

export const TryOn = () => {
    return (<><Container>
        <Row>
          <Image src="https://static.zennioptical.com/marketing/landingpage/landing-ditto/rashida/vtolp_findsquare_gif-lg.gif?quality=high"  width="608"
        height="338" thumbnail />
          
        </Row>
      </Container></>);
};

export const Product = () => {
    return (<><Container>
        <Row>
        <Col>
          <Image src="https://static.zennioptical.com/production/products/general/28/36/283621-eyeglasses-front-view.jpg?resize=500px:*&output-quality=80"  width="300"
        height="100" thumbnail />
         </Col> 
        </Row>
      </Container></>);
};

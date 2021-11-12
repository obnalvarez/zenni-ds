import React from 'react';
import { Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './InputGroup.css';

export const EmailAdd  = () => {
    return (<>  <InputGroup className="xs">
    <FormControl 
      width="308"
      placeholder="Email Address"
      aria-label="Email Address"
      aria-describedby="basic-addon2"
    />
    <Button style={{backgroundColor: "#007b8f", color: "white"}} variant="outline-secondary" id="button-addon2">
      SIGN UP
    </Button>
  </InputGroup></>);
}

export const RadioGroup  = () => {
    return (<>
        <Form>
            <Row >
                <Col className={'radio-group'}>
                <p>EMAIL TO RECIPIENT</p>
                <Form.Check
                    type="radio"
                    label="Selected"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    style={{ width: "100"}} 
                />
                </Col>
                <Col className={'radio-group'}>
                <p>Print At Home</p>
                <Form.Check
                    type="radio"
                    label="Selected"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                </Col>
            </Row>
        </Form>
</>);
}
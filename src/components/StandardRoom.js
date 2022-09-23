import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import room2 from '../images/room2.jpg'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

import {CalendarComponent}from '@syncfusion/ej2-react-calendars'
import Form from 'react-bootstrap/Form';




function StandardRoom () {

    const [show, setShow] = useState(false);

    if (show) {

        return (
        <Alert style={{backgroundColor:'white',height:'600px' ,textAlign:'center'}} onClose={() => setShow(false)} dismissible>
            <Alert.Heading style={{marginTop:'50px'}}>RESERVATION  STANDARDROOM</Alert.Heading>
            <div style={{display:'flex',marginTop:'70px',marginLeft:'9%'}}>
                <div style={{fontSize:'22px'}}>
                    CHECK IN
                <CalendarComponent/> 
                </div>
                <div style={{marginLeft:'6%',fontSize:'22px'}}>
                    CHECK OUT
                <CalendarComponent/>
                </div>
                <div style={{marginLeft:'14%',marginTop:'20px'}}>
                
                <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" />
                <Form.Text>
                    <span1 style={{fontSize:'12px'}}>예약자 이름을 입력해주세요.</span1>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                </Form.Text>
                </Form.Group>
                <Form.Select aria-label="Default select example">
                <option>예약 인원</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </Form.Select>
                <Button variant="primary" type="submit" style={{marginTop:'30px'}}>
                    예약하기
                </Button>
                </Form>
                </div>

                </div>      
        </Alert>
        );
    }



    return(

        <div style={{textAlign:'center'}}>
            <Card style={{ width: '100%' }}>
            <Card.Img src={room2} style={{width:'600px',margin:'0 auto'}}/>
            <Card.Body>
            <Card.Title><h2 >스탠다드룸</h2><h4> price: 70,000 원</h4></Card.Title>
            <Card.Body>
            <Button variant="primary" onClick={() => setShow(true)} style={{alignItems:'center'}}>예약하기</Button>{' '}
            </Card.Body>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{backgroundColor:'rgb(113, 152, 236)' ,color:'white'}}><h3>침대타입</h3>더블</ListGroup.Item>
                <ListGroup.Item><h3>전망</h3>시티뷰/오션뷰</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'rgb(113, 152, 236)' ,color:'white'}}><h3>투숙인원</h3>2명</ListGroup.Item>
                <ListGroup.Item><h3>객실면적</h3>34㎡</ListGroup.Item>
            </ListGroup>
            
            </Card>
        </div>
    )

}
export default StandardRoom
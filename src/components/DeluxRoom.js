import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import room3 from '../images/room3.jpg'
import Button from 'react-bootstrap/Button';


function DeluxeRoom () {
    return(
        <div style={{textAlign:'center'}}>
            <Card style={{ width: '100%' }}>
            <Card.Img src={room3} style={{width:'600px',margin:'0 auto'}}/>
            <Card.Body>
            <Card.Title><h2 style={{}}>디럭스룸</h2></Card.Title>
            <Card.Text>
            price: 100,000 원
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{backgroundColor:'rgb(113, 152, 236)' ,color:'white'}}><h3>침대타입</h3>더블</ListGroup.Item>
                <ListGroup.Item><h3>전망</h3>오션뷰</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'rgb(113, 152, 236)' ,color:'white'}}><h3>투숙인원</h3>4명</ListGroup.Item>
                <ListGroup.Item><h3>객실면적</h3>48㎡</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Button variant="primary" style={{alignItems:'center'}}>예약하기</Button>{' '}
            </Card.Body>
            </Card>
        </div>
        
    )
}
export default DeluxeRoom
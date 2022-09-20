import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import room1 from '../images/room1.jpg'
import Button from 'react-bootstrap/Button';

function SingleRoom () {


    return(
        <div style={{textAlign:'center' }}>
            <Card style={{ width: '100%' }}>
            <Card.Img src={room1}  style={{width:'600px',margin:'0 auto'}}/>
            <Card.Body>
            <Card.Title><h2>싱글룸</h2></Card.Title>
            <Card.Text>
                price: 50,000 원
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><h3>침대타입</h3>싱글 </ListGroup.Item>
                <ListGroup.Item><h3>전망</h3>시티뷰</ListGroup.Item>
                <ListGroup.Item><h3>투숙인원</h3>1명</ListGroup.Item>
                <ListGroup.Item><h3>객실면적</h3>26㎡</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Button variant="primary" style={{alignItems:'center'}}>예약하기</Button>{' '}
            </Card.Body>
            </Card>
        </div>

    )
}
export default SingleRoom;
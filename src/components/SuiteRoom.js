import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import room4 from '../images/room4.jpg'
import Button from 'react-bootstrap/Button';



function SuiteRoom () {
    return(
        <div style={{textAlign:'center'}}>
        <Card style={{ width: '100%' }}>
        <Card.Img src={room4} style={{width:'600px',margin:'0 auto'}}/>
        <Card.Body>
        <Card.Title><h2 style={{}}>스위트룸</h2></Card.Title>
        <Card.Text>
            price:150,000 원
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item><h3>침대타입</h3>더블/더블</ListGroup.Item>
            <ListGroup.Item><h3>전망</h3>시티뷰</ListGroup.Item>
            <ListGroup.Item><h3>투숙인원</h3>6명</ListGroup.Item>
            <ListGroup.Item><h3>객실면적</h3>84㎡</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button variant="primary" style={{alignItems:'center'}}>예약하기</Button>{' '}
        </Card.Body>
        </Card>
    </div>
    )
}
export default SuiteRoom
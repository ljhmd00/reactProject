import { Col,Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function RoomsCard({rooms, room, i}){
    let navigate = useNavigate()
    return(
        
        <Col>
            <Card style={{ width: '18rem' , cursor:'pointer' }} onClick={()=>{
            navigate('./roomDetail/'+room.id)
        }} >
            {/* <Card.Img variant="top" src={process.env.PUBLIC_URL +'./images/food1.jpg'} /> */}
            <Card.Img variant="top" src={rooms[i].imgPath} />
            <Card.Body>
            <Card.Title>
                {rooms.itemName}
            </Card.Title>
            <Card.Text>
                {rooms[i].content}
            </Card.Text>
            <Card.Text>
                {rooms.price}
            </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        
    )
}

export default FoodCard;

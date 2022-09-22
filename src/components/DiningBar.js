import videoBg from '../videos/Bar.mp4'
import Card from 'react-bootstrap/Card';
import breakfast from '../images/breakfast.jpg'
import dinner from '../images/dinner.jpg'
import bar from '../images/bar.jpg'

function DiningBar(){
    return(
        <div className="bar" style={{marginTop:''}}>
            <video src={videoBg} autoPlay loop muted  style={{height:'30%',height:'350px'}}/>

            <div style={{textAlign:'center',margin:'30px'}}>
                <p>기찻길 옆 아름다운 자연경관 속에서 직접 선보이는 다양한 요리를 즐기실 수 있습니다.</p>
                <div style={{marginTop:'40px',display:'flex'}}>
                <Card style={{margin:'20px',width:'600px'}}>
                    <Card.Img src={breakfast} style={{height:'200px'}}/>
                    <Card.Body>
                        <Card.Title>조식 제공</Card.Title>
                        <Card.Text>
                            <p><span1 style={{fontSize:'18px'}}>이용시간: </span1>am:07:00 ~ 10:00</p>
                            <p><span1 style={{fontSize:'18px'}}>위치: 호텔 3층</span1></p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{margin:'20px',width:'600px'}}>
                    <Card.Img src={dinner} style={{height:'200px'}}/>
                    <Card.Body>
                        <Card.Title>뷔페</Card.Title>
                        <Card.Text>
                            <p><span1 style={{fontSize:'18px'}}>이용시간: </span1>pm:17:00 ~ 21:00</p>
                            <p><span1 style={{fontSize:'18px'}}>위치: 호텔 3층</span1></p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{margin:'20px',width:'600px'}}>
                    <Card.Img src={bar} style={{height:'200px'}}/>
                    <Card.Body>
                        <Card.Title>프리미엄 바</Card.Title>
                        <Card.Text>
                            <p><span1 style={{fontSize:'18px'}}>이용시간: </span1>pm:20:00 ~ 24:00</p>
                            <p><span1 style={{fontSize:'18px'}}>위치: 호텔 8층</span1></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                </div>

            </div>
        </div>

    )

}

export default DiningBar;
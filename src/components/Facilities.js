import {Tab,Tabs,Carousel, Card} from 'react-bootstrap'
import pool from '../videos/pool.mp4'
import pool2 from '../images/pool.jpg'
import pool3 from '../images/pool2.jpg'
import spa from '../videos/spa.mp4'
import spa2 from '../images/spa2.jpg'
import spa3 from '../images/spa3.jpg'
function Facilities () {
    return (

        <div >
            <div className='facilities' id='facilities'>
            <div className='facilitiesContent' style={{margin:'30px'}}>
                <h4>더 유용한 라이프스타일을 맞춘 최상의 품격으로 호텔 내 부대시설을 이용하실 수 있습니다.</h4>
                <hr style={{color:'rgb(33, 100, 245)'}}/>
            </div>
        
    <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill style={{fontSize:'28px'}}>
    <Tab eventKey="Spa" title="Spa">

    <div style={{textAlign:'center'}}>
    <Card >
        <Card.Body>
        <Carousel>
                <Carousel.Item className='facilitiesImg'>
                <video src={spa} autoPlay loop muted  style={{width:'100%',height:'60%'}} className='facilitiesVideo' />
                    <Carousel.Caption>
                        <p style={{backgroundColor:'black',opacity:'0.6',fontSize:'28px'}}>
                            <h3 >먹지 마세요 피부에 양보하세요.</h3>
                            <p style={{fontSize:'18px'}}><span1 style={{fontSize:'22px'}}>이용료: </span1>10,000원 / Delux룸 이상 이용시 무료<br/>
                            <span1 style={{fontSize:'18px'}}>위치: 호텔 내 지하 1층</span1></p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='facilitiesImg'>
                <img src={spa2}  style={{width:'100%',opacity:'0.8'}}></img>
                <Carousel.Caption>
                        <p style={{backgroundColor:'black',opacity:'0.6',fontSize:'28px'}}>
                            <h3 >먹지 마세요 피부에 양보하세요.</h3>
                            <p style={{fontSize:'18px'}}><span1 style={{fontSize:'22px'}}>이용료: </span1>10,000원 / Delux룸 이상 이용시 무료<br/>
                            <span1 style={{fontSize:'18px'}}>위치: 호텔 내 지하 1층</span1></p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='facilitiesImg'>
                <img src={spa3}  style={{width:'100%',opacity:'0.8'}}></img>
                <Carousel.Caption>
                        <p style={{backgroundColor:'black',opacity:'0.6',fontSize:'28px'}}>
                            <h3 >먹지 마세요 피부에 양보하세요.</h3>
                            <p style={{fontSize:'18px'}}><span1 style={{fontSize:'22px'}}>이용료: </span1>10,000원 / Delux룸 이상 이용시 무료<br/>
                            <span1 style={{fontSize:'18px'}}>위치: 호텔 내 지하 1층</span1></p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Card.Body>
    </Card>
    </div>  
    </Tab>

    <Tab eventKey="swimmingPool" title="Swimming Pool">
    <div style={{textAlign:'center'}}>
    <Card >
        <Card.Body>
        <Carousel>
                <Carousel.Item className='facilitiesImg'>
                <video src={pool} autoPlay loop muted  style={{width:'100%',height:'30%'}} className='facilitiesVideo' />
                <Carousel.Caption>
                        <p style={{backgroundColor:'black',opacity:'0.6',fontSize:'28px'}}>
                            <h3 >노 키즈존 수영장</h3>
                            <p style={{fontSize:'18px'}}><span1 style={{fontSize:'22px'}}>이용료: </span1>8,000원 / Delux룸 이상 이용시 무료<br/>
                            <span1 style={{fontSize:'18px'}}>위치: 호텔 내 1층 옆</span1></p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='facilitiesImg'>
                <img src={pool2}  style={{width:'100%',opacity:'0.8'}}></img>
                <Carousel.Caption>
                        <p style={{backgroundColor:'black',opacity:'0.6',fontSize:'28px'}}>
                            <h3 >노 키즈존 수영장</h3>
                            <p style={{fontSize:'18px'}}><span1 style={{fontSize:'22px'}}>이용료: </span1>8,000원 / Delux룸 이상 이용시 무료<br/>
                            <span1 style={{fontSize:'18px'}}>위치: 호텔 내 1층 옆</span1></p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='facilitiesImg'>
                <img src={pool3}  style={{width:'100%',opacity:'0.8'}}></img>
                <Carousel.Caption>
                        <p style={{backgroundColor:'black',opacity:'0.6',fontSize:'28px'}}>
                            <h3 >노 키즈존 수영장</h3>
                            <p style={{fontSize:'18px'}}><span1 style={{fontSize:'22px'}}>이용료: </span1>8,000원 / Delux룸 이상 이용시 무료<br/>
                            <span1 style={{fontSize:'18px'}}>위치: 호텔 내 1층 옆</span1></p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Card.Body>
    </Card>
    </div>  

    </Tab>
    </Tabs>
    </div>
        </div>

    )
}

export default Facilities;
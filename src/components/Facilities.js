import {Tab,Tabs} from 'react-bootstrap'
import pool from '../videos/pool.mp4'
import spa from '../videos/spa.mp4'
function Facilities () {
    return (

        <div >
            <div className='facilities' id='facilities'>
            <div style={{margin:'30px',fontSize:'22px'}}>더 유용한 라이프스타일을 맞춘 최상의 품격으로 호텔 내 부대시설을 이용하실 수 있습니다.</div>
        
    <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill style={{fontSize:'28px'}}>
    <Tab eventKey="Spa" title="Spa">
        
        <video src={spa} autoPlay loop muted  style={{height:'400px',borderRadius:'20%'}} />
        <div style={{textAlign:'center',margin:'30px',borderBottom:'1px solid black'}}>
            <p>먹지 마세요 피부에 양보하세요.</p>
            <p><span1 style={{fontSize:'18px'}}>이용료: </span1>10,000원 / Delux룸 이상 이용시 무료</p>
            <p><span1 style={{fontSize:'18px'}}>위치: 호텔 내 지하 1층</span1></p>
            </div>
    </Tab>

    <Tab eventKey="swimmingPool" title="Swimming Pool">
        <video src={pool} autoPlay loop muted  style={{height:'400px',borderRadius:'20%'}} />
        <div style={{textAlign:'center',margin:'30px',borderBottom:'1px solid black'}}>
            <p>노 키즈존 수영장</p>
            <p><span1 style={{fontSize:'18px'}}>이용료: </span1>8,000원 / Delux룸 이상 이용시 무료</p>
            <p><span1 style={{fontSize:'18px'}}>위치: 호텔 내 1층 옆</span1></p>
        </div>
    </Tab>
    </Tabs>
    </div>
        </div>

    )
}

export default Facilities;
import {Tab,Tabs} from 'react-bootstrap'
import pool from '../videos/pool.mp4'
import spa from '../videos/spa.mp4'
function Facilities () {
    return (

        <div >
            <div className='facilities' id='facilities'>
        
    <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill style={{fontSize:'28px'}}>
    <Tab eventKey="Spa" title="Spa">
        
        <video src={spa} autoPlay loop muted  style={{height:'30%'}} />
        
    </Tab>

    <Tab eventKey="swimmingPool" title="Swimming Pool">
    <video src={pool} autoPlay loop muted  style={{height:'30%'}} />
    </Tab>
    </Tabs>
    </div>
        </div>

    )
}

export default Facilities;
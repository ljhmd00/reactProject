import {Tab,Tabs} from 'react-bootstrap'
import SingleRoom from '../components/SingleRoom';
import StandardRoom from '../components/StandardRoom'
import DeluxeRoom from '../components/DeluxRoom'
import SuiteRoom from '../components/SuiteRoom';


function Rooms (){
    return(
        <div className='rooms' id='rooms'>

      <div style={{textAlign:'center',margin:'40px'}}>
        <h4>호텔 요기야는 10개 타입의 다양한 객실로 조용하고 안락한 쉼을 제공합니다.</h4>
      </div>  
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill style={{fontSize:'28px'}}>
      <Tab eventKey="SingleRoom" title="SingleRoom">
        <SingleRoom />
      </Tab>
      <Tab eventKey="StandardRoom" title="StandardRoom">
        <StandardRoom/>
      </Tab>
      <Tab eventKey="DeluxeRoom" title="DeluxeRoom">
        <DeluxeRoom/>
      </Tab>
      <Tab eventKey="SuiteRoom" title="SuiteRoom">
        <SuiteRoom/>
      </Tab>
    </Tabs>
      
    </div>
    


        
    )
}

export default Rooms;
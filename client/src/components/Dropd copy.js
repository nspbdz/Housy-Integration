import {Dropdown,Image,Row,Col} from "react-bootstrap"
import { BsCalendar } from 'react-icons/bs';
import { FaTransgender,FaPhone } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import { IoNewspaperOutline,IoLogOutOutline } from 'react-icons/io5';


function Dropd(){

    return(
    <Dropdown>
  <Dropdown.Toggle style={{backgroundColor:"transparent",border:"none" }} id="dropdown-basic">
   <Image style={{width:"50px"}} src="https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg" roundedCircle />
    
  </Dropdown.Toggle>

  <Dropdown.Menu>

    <Dropdown.Item href="#/action-1">
      <Row>
        <Col sm="2"> <MdPersonOutline /> </Col>
        <Col sm="2"> Profile</Col>
      </Row>
      </Dropdown.Item>
      
    <Dropdown.Item href="#/action-2">
    <Row>
        <Col sm="2"> <BsCalendar /> </Col>
        <Col sm="2"> My Booking</Col>
      </Row>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3">
    <Row>
        <Col sm="2"> <IoNewspaperOutline /> </Col>
        <Col sm="2"> History</Col>
      </Row>
    </Dropdown.Item>
    <hr></hr>
    <Dropdown.Item href="#/action-3">
    <Row>
        <Col sm="2"> < IoLogOutOutline/> </Col>
        <Col sm="2"> Logoout</Col>
      </Row>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    )
}
export default Dropd;
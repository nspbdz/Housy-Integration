
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card,Form, Button,ListGroup } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import brand from "../assets/images/brand.svg";
import { UserContext } from "../contexts/userContext";

function HistoryItem({ item }) {
  const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })

  const router = useHistory();
  const [dataUpdate, setDataUpdate] = useState([])
  const handleChange = (e) => {
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };
  const contextValue = useContext(UserContext);
  
  const dataUser=contextValue[0];
  console.log(item)
  var d1 = new Date(item.checkin);
var d2 = new Date(item.checkout);
const checkinYear=d1.getUTCFullYear()
const checkinMonth=d1.getUTCMonth()
const checkinDay=d1.getUTCDate()
const checkoutYear=d2.getUTCFullYear()
const checkoutMonth=d2.getUTCMonth()
const checkoutDay=d2.getUTCDate()

const compareYear=checkoutYear-checkinYear
const compareMonth=checkoutMonth-checkinMonth
const compareDay=checkoutDay-checkinDay
var AllCompared=0;

if(compareDay ==0){
  var AllCompared=AllCompared
}
else if(compareDay >0){
  console.log("day")
  console.log(compareDay)
  // var AllCompared=compMonth+compareDay
  var AllCompared=AllCompared+compareDay
  
  if(compareMonth >0){
    var compMonth=compareMonth*30
    console.log(compMonth)
    var AllCompared=compMonth+compareDay

  }
  if(compareYear >0){
    var compYear=compareYear*365
    var AllCompared=compYear+compareDay
    console.log(AllCompared)
  }
}
const totals=compareYear+"Year  " +compareMonth +" Month " +compareDay +" Day"
console.log(totals)
 
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("clicked")
  
  try {
    const formData = new FormData();
    formData.set("status", "Pending");
    formData.append("imageFile", dataUpdate.imageFile, dataUpdate.imageFile.name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    // let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/150`, {
      let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/${item.id}`, {
        method: 'PATCH',
        body: formData,
      }

    );
    console.log(res)

    const stat=res.status
       if(stat=="200"){
        console.log("success")
        alert("kamu berhasil")
        router.push(`/mybookingpending`);
       }
    // console.log(res)

  } catch (error) {
    console.log(error);
  }
};

const handleClicks = (event) => {
  console.log("clicked")
  event.preventDefault()
  
  // MakeTransaction() 
}
  
  
  return (
    <>
    <Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
    <Col xs lg="2">
      
    </Col>
    <Col md="auto">
    <Row>
    <Card style={{ width: '1035px',height:"419px"  }}>
    <ListGroup variant="flush">
      {/* <ListGroup.Item> */}
      <Row>
      <Col sm={4}>
      <img src={brand} alt="brand" />
    
      </Col>
      <Col sm={5}>
        
      </Col>
      
      <Col sm={3}>
        <h4>Booking</h4>
        <p>{Nowss} </p>
      </Col>
      </Row>
    
     
      <Row>
      <Col sm>
      <h4>{item.house.name}</h4>
    <p>{item.house.address}</p>
      <Button  variant="secondary">{item.status}</Button>
      </Col>
      <Col sm>
      <Row>
        <Col sm>status</Col>
        <Col sm>
          <p>Check-In</p>
    
        {/* <p>{item.checkin} </p> */}
        <br></br>
        <p>Check-Out</p>
        {/* <p>{item.checkout} </p> */}
        
        </Col>
      
      </Row>
      </Col>
      <Col sm>
          <h5>Amenities</h5>
        <p>{item.house.amenities} </p>
        <h5>Type Of Rent</h5>
        <p>{item.house.typeRent} </p>
        </Col>
      <Col sm>
        
        <img style={{width:"138px"}} src={item.attachment} />
      <p>Upload Payment Proof</p>
     
            
      </Col>
    </Row>
      
      <ListGroup>
      <Row>
      <Col sm="4">
      <Row>
      <Col sm="4">
       
      <h5>No</h5>
        
      </Col>
      <Col sm="4"><h5>Full Name</h5></Col>
      <Col sm="4"><h5>Gender</h5></Col>
    </Row>
      </Col>
      <Col sm="4"><h5>Phone/Email</h5></Col>
      <Col sm="4">
    
      </Col>
    </Row>
      </ListGroup>
      {/* </ListGroup.Item> */}
      {/* <ListGroup.Item> */}
      
      <Row>
      <Col sm={4}>
      <Row>
      <Col sm={4}>1 </Col>
      <Col sm={4}>{dataUser.user.fullname} </Col>
      <Col sm={4}>{dataUser.user.gender} </Col>
    </Row>
     </Col>
     <Col sm={4}>{dataUser.user.email} </Col>
      <Col sm={2}>
      <p>Long Time Rent :</p>
      </Col>
      <Col sm={2}>
        <p> {item.totaltime} </p>
      {/* <p>{compareYear +"Year "}
        {compareMonth +" Month "}
        {compareDay +" Day"} </p> */}
    
      </Col>
    </Row>
    
      {/* <ListGroup.Item> */}
        <Row>
      <Col sm={4}> </Col>
      <Col sm={4}> </Col>
      <Col sm={2}>Total : </Col>
      <Col sm={2}>Rp. {item.total} </Col>
    </Row>
    
      {/* </ListGroup.Item> */}
      {/* <ListGroup.Item> */}
        <Row>
      <Col sm={4}> </Col>
      <Col sm={4}> </Col>
      <Col sm={4}>
    
      
         </Col>
    </Row>
    
      {/* </ListGroup.Item> */}
      {/* </ListGroup.Item> */}
    </ListGroup>
    </Card>
      <Col sm={4}></Col>
      <Col sm={4}> </Col>
      <Col sm={4}> </Col>
    </Row>
    </Col>
    <Col xs lg="2">
      
    </Col>
    </Row>
    </>
       

  )
  
}

export default HistoryItem;

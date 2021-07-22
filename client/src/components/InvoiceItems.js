
import { useHistory,Router,Link } from "react-router-dom";
import { Form, Button,Col,Row,ListGroup,Card } from "react-bootstrap";
import { useState,useContext } from "react";
import brand from "../assets/images/brand.svg";
import { UserContext } from "../contexts/userContext";

function InvoiceItems({ item,id }) {
  const router = useHistory();
  const [data, setData] = useState([])
  const contextValue = useContext(UserContext);
  const dataUser=contextValue[0];
  console.log(dataUser)

  item=item[0]
  console.log(item)
  console.log(item)

  var token= localStorage.getItem("token")
  const cancelStatus = (e) => {
    e.preventDefault()
    
    fetch(`http://localhost:5000/api/v1/updatetransacti/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        status: "Cancel"
      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        // alert("kamu berhasil Update Status ")
        // router.push(`/mybooking`);
       }
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }
  const approveStatus = (e) => {
    e.preventDefault()
    
    fetch(`http://localhost:5000/api/v1/updatetransacti/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        status: "Approve"
      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        // alert("kamu berhasil Update Status ")
        // router.push(`/mybooking`);
       }
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }
  return (
    <>
      
<Row className="justify-content-md-center" style={{width:"700px"}} >
<Col xs lg="2">
  
</Col>
<Col md="auto">
<Row>
<Card style={{ width: '1035px',height:"419px"  }}>
<ListGroup variant="flush">
  <ListGroup.Item>
  <Row>
  <Col sm={4}>
  <img src={brand} alt="brand" />

  </Col>
  <Col sm={5}>
    
  </Col>
  
  <Col sm={3}>
    <h4>Booking</h4>
    {/* <p>{Nowss} </p> */}
  </Col>
  </Row>

  
  <Row>
  <Col sm>
  <h4>{item.house.name}</h4>
<p>{item.house.address}</p>
  <Button  variant="secondary"> {item.status}</Button>
  </Col>
  <Col sm>
  <Row>
    <Col sm>status</Col>
    <Col sm>
      <p>Check-In</p>

    <p>{item.checkin} </p>
    <br></br>
    <p>Check-Out</p>
    <p>{item.checkout} </p>
    
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
    
    <img style={{width:"138px"}} src="" />
  <p>Upload Payment Proof</p>

        
  </Col>
</Row>
  
  <ListGroup>
  <Row>
  <Col sm="4">
  <Row>
  <Col sm="2">
   
  <p>No</p>
    
  </Col>
  <Col sm="6"><p>Full Name</p></Col>
</Row>
  </Col>
  <Col sm="2"><p>Gender</p></Col>
  <Col sm="4"><p>Phone/Email</p></Col>
  <Col sm="4">

  </Col>
</Row>
  </ListGroup>
  </ListGroup.Item>
  <ListGroup.Item>
  
  <Row>
  <Col sm={4}>
  <Row>
  <Col sm={4}>1 </Col>
  <Col sm={4}>{dataUser.user.fullname} </Col>
  <Col sm={4}>{dataUser.user.gender} </Col>
</Row>
 </Col>
 <Col sm={4}>{dataUser.user.email} </Col>
  <Col sm={4}>
  {/* <p>Long Time Rent :</p> */}
  </Col>
  <Col sm={2}>
  <p>Long Time Rent :</p>
  </Col>
  <Col sm={2}>
  <p>{item.totaltime}</p>

  </Col>
</Row>

  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>Total : </Col>
  <Col sm={2}>Rp. {item.total} </Col>
</Row>

  </ListGroup.Item>
  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={2}> </Col>
  <Col sm={3}>

  
  <Button     onClick={cancelStatus}  variant="danger" style={{width:"150px"}}>
    Cancel
  </Button>
     </Col>
     <Col sm={3}>

  
  <Button onClick={approveStatus}   variant="primary" style={{width:"150px"}}>
    Approve
  </Button>

     </Col>
</Row>

  </ListGroup.Item>
  </ListGroup.Item>
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

export default InvoiceItems;

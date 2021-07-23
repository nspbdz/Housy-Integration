import { useState,useContext,useEffect } from "react";
import {Row,Col, Form, Button,InputGroup,FormControl } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { API } from "../../config/api";
function AddPropertyForm(props) {
  const [DataAmenities, setDataAmenities] = useState([]);
  const { handleClose,handleOrder, show } = props;
  const [loading, setLoading] = useState(true);
  const [dataCity, setDataCity] = useState();
  
  const router = useHistory();
  const tokens=localStorage.getItem("token");
  console.log(tokens);
  const contextValue = useContext(UserContext);
  const userId=contextValue[0].user.id;
  const pa =window.location.pathname
  const splitval=pa.split("/house/")
  const urlVal=splitval[1]
  console.log(urlVal)
  // var Gethouse_id =localStorage.getItem("house_id")
// console.log(a)

  

  const [data, setData] = useState([])
  const [formData, setFormData] = useState({});

  const [amens,setAmens] = useState([])
  const handleCheckboxChange = (event) => {
 // event.preventDefault()
   
     let newArray = [...amens, event.target.id];
     if (amens.includes(event.target.id) )
      {
       newArray = newArray.filter(day => day !== event.target.id);
     }
     setAmens(
       newArray
     );
   };
 console.log(amens.toString())
 
  const handleChange = (event) => {
    const a=event.target.value
    console.log(formData)
    // setFormData(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });

  }
  console.log(formData)
var token= localStorage.getItem("token")
console.log(token);

const getProduct = async () => {
  
  const response = await API.get("/citys");
  console.log(response);
  setDataCity(response.data.data);
  setLoading(false);
};
useEffect(() => {
  getProduct();
}, []);
console.log(dataCity)

const getAmens = async () => {
  const amenss=toString(amens)  
  // setDataCity(response.data.data);
  // setLoading(false);
};
useEffect(() => {
  getAmens();
}, []);

  const MakeTransaction = () => {
    fetch('http://localhost:5000/api/v1/house', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          // 'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        address:formData.address,
        bedroom:formData.bedroom,
        bathroom:formData.bathroom,
        city_id:formData.city_id,
        name:formData.name,
        price:formData.price,
        typeRent:formData.typeRent,
        // amenities:amens.toString(),
        

      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       console.log(res)
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        alert("kamu berhasil membuat transaksi")
        // router.push(`/mybooking`);
       }
       console.log(res.status)
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }

  


  const handleSubmit = (event) => {
    event.preventDefault()
    MakeTransaction() 
  }
  const dataAmenities = [
    {
      id: "1",
      name: "Furnished",
    },
    {
      id: "2",
      name: "Pet Allowed",
    },
    {
      id: "3",
      name: "Shared Accomodation",
    },
   
  ];

console.log(dataAmenities[0].name)
console.log(DataAmenities)

  return (
  <>
  
    <Form>
       
   
  <Form.Group className="mb-3" controlId="name">
    <Form.Label> <h5> Name Property</h5></Form.Label>
    <Form.Control type="text"  name="name" value={formData.name} onChange={handleChange} />
  </Form.Group>

  
  <h5>City</h5>
    <Row>
      <div>

      <select required name="city_id" onChange={handleChange} style={{marginLeft:"10px",width:"930px"}}>
      <option  value="undefined"></option>
     
      {dataCity?.length > 0 &&
        dataCity?.map((itemCity, index) => (
      <option  value={itemCity.id}>{itemCity.name}</option>
      ))}
      </select>  
      </div>

    </Row>
  <Form.Group className="mb-3" controlId="address">
    <Form.Label> <h5> Address</h5></Form.Label>
    <Form.Control as="textarea"  name="address" value={formData.address} onChange={handleChange} rows={3} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label> <h5> Price </h5></Form.Label>
    <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} />
  </Form.Group>
  <h5>Type Rent</h5>

  <select  name="typeRent" onChange={handleChange} style={{width:"1110px"}}>
  <option value=""> - </option>
  <option value="day">Day</option>
  <option value="month">Month</option>
  <option value="year">Year</option>
  </select>
  <br></br>

  <h5>Amenities</h5>
  <Row>

  {dataAmenities.map((item) => {
         return (
           <>
<Col sm="1">

          <p>
            {item.name}
          </p>
</Col>
<Col sm="1">

    <input
      onChange={(e) => {
        // add to list
        if (e.target.checked) {
          setDataAmenities([
            ...DataAmenities,
            {
              id: item.id,
              name: item.name,
          
            },
          ]);
        } else {
          // remove from list
          setDataAmenities(
            DataAmenities.filter((amenitiesData) => amenitiesData.id !== item.id),
          );
        }
      }}
      value={DataAmenities}
      style={{ margin: '20px' }}
      type="checkbox"
    />
           </Col>
           </>

)
})
}
</Row>
   
   
  <h5>Bedroom</h5>
  <select name="bedroom" onChange={handleChange} style={{width:"1110px"}}>
  <option value=""> - </option>
  <option  value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5+">5+</option>
  </select>
  <br></br>
  <h5>Bathroom</h5>
  <select name="bathroom" onChange={handleChange}  style={{width:"1110px"}}>
  <option value=""> - </option>
  <option  value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5+">5+</option>
  </select>
  <br></br>

<Row>
              <Col sm="4" > 
                <p> Furnished</p> 
              </Col>
              <Col sm="4" >   </Col>
              <Col sm="4" >
              <input 
                type="checkbox"
                id="Furnished"
                value="Furnished"
                onChange={handleCheckboxChange}
              />
              </Col>
            </Row>
            <Row>
              <Col sm="5" > 
                <p> Pet Allowed</p> 
              </Col>
              <Col sm="3" >   </Col>
              <Col sm="4" >
              <input 
                type="checkbox"
                id="Pet Allowed"
                value="Pet Allowed"
                onChange={handleCheckboxChange}
              />
              </Col>
            </Row>
  <Button type="submit" onClick={handleSubmit}> Save</Button>
</Form>


</>

 
  );
}

export default AddPropertyForm;

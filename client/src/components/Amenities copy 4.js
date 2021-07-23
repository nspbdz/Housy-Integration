import React, { useState,useEffect } from "react";
//  function Amenities() {
  import { InputGroup,FormControl,Row,Col,Form } from "react-bootstrap";

function Amenities({ amenities, setAmenities}) {
  const [values, setValues] = useState(true);
  const [furnis, setFurnis] = useState(true);
  const [pet, setPet] = useState(true);
  const [shared, setShared] = useState(true);
  
  const handle1  = (e) => {
    setFurnis(e.target.value)
  }
  const handle2  = (e) => {
    setPet(e.target.value)
  }
  const handle3  = (e) => {
    setShared(e.target.value)
  }

  const handleAmenities  = (e) => {
    // const fur=furnis? furnis:"kosong"
    // const pets=pet? pet:"kosong"
    // const share=shared? shared:"kosong"

    // console.log(fur)
    // console.log(" "+fur+","+pets+","+share+" ")
    // const mixeVal=
    setAmenities(furnis+pet+shared)
    // setValues(" "+fur+","+pets+","+share+" ")
    // if(x)

  }

  useEffect(() => {
    handleAmenities();
  }, []);

  handleCheckboxChange = event => {
    let newArray = [...values, event.target.id];
    if (values.includes(event.target.id)) {
      newArray = newArray.filter(day => day !== event.target.id);
    } 
    setValues({
      values: newArray
    });
  };
  console.log(amenities)
  return (
    <form>
        <Row>
            <Col sm><p className=""> Furnished</p></Col>
            {/* <Col sm></Col> */}
            <Col sm>
           <input   
                value="Furnished"
                onChange={handle1}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className=""> Pet Allowed</p></Col>
            <Col sm>   
           <input   
                value="Pet Allowed"
                onChange={handle2}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className="">Shared Accomodation</p></Col>
            <Col sm>   
           <input   
                value="Shared Acomodities"
                onChange={handle3}
                type="checkbox"
              />
            </Col>
        </Row>

    </form>
    );
}
export default Amenities;
import { InputGroup,FormControl,Row,Col,Form } from "react-bootstrap";
// import React from 'react';
import React, { useCallback } from 'react'


function Amenities({ amenities, setAmenities}) {
  const [amen,setAmen] = useState({
    ame:"",
   
  })

    const handleAmenities = useCallback(event => {
      setAmen({
        ame:[event.target.value],
     
      })
        // setAmenities({
        //     ...amenities,
        //     furnished:event.target.value
        // })
    }, [setAmenities])
  console.log(amen)
const amens=["Furnished","Pet Allowed","Shared Acomodation",]
        return (
            <>
    
        <p className="h3 text-left font-weight-bold">Amenities</p> 
        <form >
        {amens.map((rento, index) => (
            // <label ref={elemRef} onClick={handleColor} name={rento} value={rento} key={index} style={{textAlign:"center", border:"1px solid #CCC",width:"70px",margin:"15px",height:"30px"}}>
            <label  key={index} style={{textAlign:"center", border:"1px solid #CCC",width:"70px",margin:"15px",height:"30px"}}>
              {rento}
              <input      
                value={[rento]}
                name={rento}
                onChange={handleAmenities}
                type="checkbox"
              />
            </label>
          ))}
        </form>
         <Row>
            <Col sm><p className=""> Furnished</p></Col>
            {/* <Col sm></Col> */}
            <Col sm>
           <input   
            //   style={{display:"none"}}
                value="Furnished"
                checked={amenities === "Furnished"}
                onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className=""> Pet Allowed</p></Col>
            <Col sm>   
           <input   
            //   style={{display:"none"}}
                value="Pet Allowed"
                checked={amenities === "Pet Allowed"}
                // onChange={() => setRent(rent:"Pet Allowed")}
                onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className="">Shared Accomodation</p></Col>
            <Col sm>   
           <input   
            //   style={{display:"none"}}
                value="Shared Acomodities"
                checked={amenities === "Shared Acomodities"}
                // onChange={() => setRent(rent:"Share Acomodities")}
                onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

            </>

        )
}
  
  export default Amenities;

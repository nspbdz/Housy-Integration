import { InputGroup,FormControl,Row,Col,Form } from "react-bootstrap";
// import React from 'react';
import React, { useCallback,useState,useRef,useEffect } from 'react'


function Amenities({ amenities, setAmenities}) {
    const elemRef = useRef(null);
  
    const [amen,setAmen] = useState({
        furn:"",
       pet:"",
       share:"",
      })
      const handleChange1 = (e) => {
       console.log(e.target.value)
       const pets=e.target.value
      }
            
    const handleChange3 = (e) => {
        const share=e.target.value
    }
    
    
        const handleAmenities = useCallback(e => {
        
            setAmenities({
                ...amenities,
                furn:"aaa",
                pet:"amen.pet",
                share:"aaa",
            })
        }, [setAmenities])
useEffect(() => {
    handleAmenities()
    // return () => {
    //     cleanup
    // }
}, [])

      console.log(amen.furn)
      console.log(amen.share)
      console.log(amen)
        return (
            <>
    
        <p className="h5 text-left font-weight-bold">Amenities</p> 
         <Row>
            <Col sm><p className=""> Furnished</p></Col>
            {/* <Col sm></Col> */}
            <Col sm>
           <input   ref={elemRef} id={"Furnished"} onClick={handleChange1}
            //   style={{display:"none"}}
                value="Furnished"
                checked={amenities === "Furnished"}
                onChange={handleChange1}
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
                // onChange={handleChange2}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className="">Shared Accomodation</p></Col>
            <Col sm>   
           <input   onChange={handleChange3}
            //   style={{display:"none"}}
                value="Shared Acomodities"
                checked={amenities === "Shared Acomodities"}
                // onChange={() => setRent(rent:"Share Acomodities")}
                // onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

            </>

        )
}
  
  export default Amenities;

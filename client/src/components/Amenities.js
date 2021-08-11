import {useState,useEffect,useRef,useContext} from "react";
import {Col,Row} from "react-bootstrap";
import { AmenitiesContext} from "../contexts/AmenitiesContext";
import React, { useCallback } from 'react'

function Amenities({ amenities, setAmenities}) {
  
  const handleAmenities = useCallback(event => {
    setAmenities(event.target.value)
  }, [setAmenities])
  
    return (
      <div>
        <form>
          
            <h5>Amenities</h5>
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
                onChange={handleAmenities}
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
                onChange={handleAmenities}
              />
              </Col>
            </Row>
            <Row>
              <Col sm="5" > 
                <p> Shared Accomodation</p> 
              </Col>
              <Col sm="3" >   </Col>
              <Col sm="4" >
              <input 
                type="checkbox"
                id="Shared Accomodation"
                value="Shared Accomodation"
                onChange={handleAmenities}
              />
              </Col>
            </Row>
        </form>
       
      </div>
    );
  // }
}

export default Amenities;

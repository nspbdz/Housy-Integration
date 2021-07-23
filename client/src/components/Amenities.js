import {useState,useEffect,useRef,useContext} from "react";
import {Col,Row} from "react-bootstrap";
import { AmenitiesContext} from "../contexts/AmenitiesContext";

function Amenities({ amenities, setAmenities}) {
  const elemRef = useRef(null);
  
  // const [state,AmenitiesDispatch] = useContext(AmenitiesContext)
  const [amen,setAmen] = useState([])
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


useEffect(() => {

  return setAmenities(amens.toString())
}, []);

console.log(amenities)
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
              <input ref={elemRef}
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
              <input ref={elemRef}
                type="checkbox"
                id="Pet Allowed"
                value="Pet Allowed"
                onChange={handleCheckboxChange}
              />
              </Col>
            </Row>
            <Row>
              <Col sm="5" > 
                <p> Shared Accomodation</p> 
              </Col>
              <Col sm="3" >   </Col>
              <Col sm="4" >
              <input ref={elemRef}
                type="checkbox"
                id="Shared Accomodation"
                value="Shared Accomodation"
                onChange={handleCheckboxChange}
              />
              </Col>
            </Row>
        </form>
       
      </div>
    );
  // }
}

export default Amenities;

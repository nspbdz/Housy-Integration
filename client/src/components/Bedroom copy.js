import { InputGroup,FormControl, } from "react-bootstrap";
import React from 'react';
import "../styles/customBtn.css";

class PropertyRoom extends React.Component {
    constructor(){
        super();

        this.state = {
           one: false,
           two: false,
           three: false
        }
    }

    one(){
       this.setState({one: !this.state.one})
    }
    two(){
        this.setState({two: !this.state.two})
     }
  
     three(){
        this.setState({three: !this.state.three})
     }
  
    render(){
        let btn_one = this.state.one ? "blueButton" : "whiteButton";
        let btn_two = this.state.two ? "blueButton" : "whiteButton";
        let btn_three = this.state.three ? "blueButton" : "whiteButton";

        return (
            <>
        <p className="h3 text-left font-weight-bold">Property Room</p>
            <p>Bedroom</p>
            
            <p className="h3 text-left font-weight-bold">Date</p>
                        
        <Form.Group controlId="dob" id="datestyle">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
        </Form.Group>
        <p>bedroom</p>
          <form>
          {bedrooms.map((bedroom, index) => (
            <label key={index}  style={{border:"1px solid #CCC",width:"25px",margin:"15px"}}>
              {bedroom}
              <input               style={{display:"none"}}
                value={bedroom}
                checked={this.state.bedroom === bedroom}
                onChange={this.handleBedroomChange}
                type="radio"
              />
            </label>
          ))}
        </form>
            </>

        )
    }
}
  
  export default PropertyRoom;
    
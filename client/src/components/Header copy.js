import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Badge,Button,  FormControl,  InputGroup,  Form,  Navbar,  Nav,  Col,  Row,  Image} from "react-bootstrap";
import { Navbar, Nav, Container,Image, Button } from 'react-bootstrap'
import { UserContext } from "../contexts/userContext";
import ModalSignin from "./ModalSignin";
import ModalSignup from "./ModalSignup";
import data from "../data/fakeData";
import brand from "../assets/images/brand.svg";

import "../styles/customStyle.css";
import Dropd from "./Dropd";
function Header() {
  const [state, dispatch] = useContext(UserContext);
  const [showSignUp,setshowSignUp,handleSignUp] = useState(false);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleLogout = () => {
      dispatch({
          type: "LOGOUT"
      })
  }
  console.log(state);
  return (
 <>
     <Navbar bg="light" variant="light">
     <Link to="/" className="navbar-brand"><img src={brand} alt="brand" />  </Link>

                <Container>
                  
                    <Nav className="me-auto">
                        <Link to="/" className="btn btn-light">Home</Link>
                        <Link to="/about" className="btn btn-light">About</Link>
                        <Link to="/product" className="btn btn-light">Product</Link>
                        <Link to="/profile" className="btn btn-light">Profile</Link>
                    </Nav>
                    <Nav className="ms-auto">
                    {!state.isLogin ?
                    <>
                        <Button onClick={handleShow} className="mr-3 my-2">Login</Button>
                        <Button className="mr-3 my-2" onClick={() => setshowSignUp(true)} >Sign Up</Button> 
                    </>

                        :
                        
                        // <Button onClick={handleShow} className="mr-3 my-2">Logout</Button>
                      <Dropd />

                     }

                    </Nav>
                </Container>
            </Navbar>
            {/* <ModalSignin show={show} handleClose={() => setshow(false)} handleLogin={dispatch}/> */}
      {/* <ModalSignup show={showSignUp} handleClose={() => setshowSignUp(false)} handleSignUp={dispatch}/> */}

            <ModalSignin show={show} handleClose={handleClose} />
      <ModalSignup show={showSignUp} handleClose={() => setshowSignUp(false)} handleSignUp={dispatch}/>

 </>
     
     
  );
};

export default Header;
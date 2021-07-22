import { ListGroup } from "react-bootstrap";
import TypeRent from "./TypeRent"
import Date from "./Date"
import PropertyRoom from "./Bedroom"
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import Budget from "./Budget";
import Demo2 from "./Demo2";
const Sidebar = () => {
  return (
    <>
    <TypeRent />
    <Date />
    <PropertyRoom />
    <Bathroom />
    <Amenities />
    <Budget />
    <Demo2/>
    </>
   
  );
};

export default Sidebar;

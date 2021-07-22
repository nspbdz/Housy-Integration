import { useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import { FaBath,FaBed } from 'react-icons/fa';

import { useState, useEffect } from "react";
import { API } from "../config/api";

const HouseId = ({ match }) => {
  const params = useParams();
  localStorage.setItem("house_id", params.id)
  // var a =localStorage.getItem("house_id")
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const getProduct = async () => {
    const response = await API.get(`/house/${params.id}`);
    console.log(response);
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
    return () => {
      setData(null);
    };
  }, []);
console.log(data)

  if (loading) return <p>loading...</p>;
  localStorage.setItem("price", data.price)
  var a =localStorage.getItem("price")
  console.log(data.image1)
  console.log(a)
  return (
    
<>
                        <Row className="justify-content-md-center">
                        <Col xs lg="4">
                        </Col>
                        <Col md="auto" style={{ paddingBottom:"12px"}}>
             <img src={data.image} style={{width:"1018px",height:"400.16px",paddingTop:"50px"}} alt="brand" />
                        <Row style={{paddingBottom:"40px"}}>
                        <Col sm="4">
              <img src={data.image1} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />
                        </Col>
                        <Col sm="4">
              <img src={data.image2} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />
                        </Col>
                        <Col sm="4">
              <img src={data.image3} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>


                        </Row>

                        <h1>{data.name}</h1>

                        <Row>
                            <Col sm="4">
                        <h4>Rp. {data.price}/Day</h4>

                        <p>{data.address}</p>

                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">
                                <Row>
                                    <Col sm="4">
                                    
                            <p>Bedroom</p>
                            <p> {data.bedroom} <FaBed/> </p>
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Bathroom</p>
                            <p> {data.bathroom} <FaBath/> </p>
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Area</p>
                            <p> {data.area} Ft </p>
                                    </Col>
                                    </Row>
                               
                            
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col sm="4">
                        <h4>Description</h4>

                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">

                            </Col>
                            
                            
                        </Row>
                        

                        </Col>

                       
                        <Col xs lg="4">
                            
                        </Col>
                        </Row>

                        <p className="text-center"> {data.description}</p>
                        <Row>
                        <Col sm></Col>
                        <Col sm></Col>
                           {/* {!state.isLogin ? */}
                    
                      <Col sm>
                      
                        </Col>

                        </Row> 

    
</>

  );
};

export default HouseId;

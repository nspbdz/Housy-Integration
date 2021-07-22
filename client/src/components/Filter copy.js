import { Row, Col,Form } from "react-bootstrap";
import React, { Component } from "react";
import { useHistory,Router,Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import data from "../data/fakeData";
import TypeRent from "./TypeRent";
import CardItem from "../components/CardItem"

class Filter extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      rent:"",
      bathroom: "",
      bedroom: "",
      Furnished: "",
      price: "",
      SharedCommodities: "",
      PetAllowed: "",
      data:data
          };

          this.handleBedroomChange = this.handleBedroomChange.bind(this);
          this.handleBathroomChange = this.handleBathroomChange.bind(this);
          this.handleDuratuionChange = this.handleDuratuionChange.bind(this);
          this.handlePriceChange = this.handlePriceChange.bind(this);
          this.handleFurnishedchange = this.handleFurnishedchange.bind(this);
          this.handlePetchange = this.handlePetchange.bind(this);
          this.handleSharechange = this.handleSharechange.bind(this);
          this.handleCard = this.handleCard.bind(this);
    
  }

  handleBedroomChange(e) {
    const bedroom = e.target.value;
    // const bedroom = parseInt(e.target.value); untuk mengganti value menjadi int 
    console.log(bedroom);
    this.setState({ bedroom: bedroom });
    this.setState({
        rent:"",
        bathroom: "",
        Furnished: "",
        price: "",
        SharedCommodities: "",
        PetAllowed: "",


    })
  }
    handleBathroomChange(e) {
      const bathroom = e.target.value;
      console.log(bathroom);
      this.setState({ bathroom: bathroom });
      this.setState({
        rent:"",
        bedroom: "",
        Furnished: "",
        price: "",
        SharedCommodities: "",
        PetAllowed: "",
      })
    }
    handleFurnishedchange(e) {
        // const isPublished = event.currentTarget.value === 'true' ? true: false;
        const Furnished = e.target.value === 'true' ? true: false;
        console.log(Furnished);
        this.setState({ Furnished: Furnished });
        this.setState({
            rent:"",
            bathroom: "",
            bedroom: "",
            price: "",
            SharedCommodities: "",
            PetAllowed: "",
        })
      }
      handlePetchange(e) {
        // const isPublished = event.currentTarget.value === 'true' ? true: false;
        const PetAllowed = e.target.value === 'true' ? true: false;
        console.log(PetAllowed);
        this.setState({ PetAllowed: PetAllowed });
        this.setState({
            rent:"",
            bathroom: "",
            bedroom: "",
            Furnished: "",
            price: "",
            SharedCommodities: "",
        })
      }
      handleSharechange(e) {
        const SharedCommodities = e.target.value === 'true' ? true: false;
        console.log(SharedCommodities);
        this.setState({ SharedCommodities: SharedCommodities });
        this.setState({
            rent:"",
            bathroom: "",
            bedroom: "",
            Furnished: "",
            price: "",
            PetAllowed: "",

        })
      }
    
    handleDuratuionChange(e) {
      const rent = e.target.value;
      console.log(rent);
      this.setState({ rent: rent });
      this.setState({
        bathroom: "",
        bedroom: "",
        Furnished: "",
        price: "",
        SharedCommodities: "",
        PetAllowed: "",
      })
    }
    handlePriceChange(e) {
        const price = parseInt(e.target.value);
        console.log(price);
        this.setState({ price: price });
        this.setState({
            rent:"",
            bathroom: "",
            bedroom: "",
            Furnished: "",
            SharedCommodities: "",
            PetAllowed: "",
        })
      }
   
   
      handleCard = ev => {
        const CardVal =ev.currentTarget.dataset.div_id
        console.log(CardVal)
       

      }
  

  render() {
    const bathrooms = ["1", "2", "3","4","5+"];
    const bedrooms = ["1", "2", "3","4","5+"];
    const rents = ["day", "month", "year"];
    const rentToShow = this.state.data.filter(item => ( item.rent === this.state.rent));
    const bathroomsToShow = this.state.data.filter(item => ( item.bathroom === this.state.bathroom));
    const bedroomsToShow = this.state.data.filter(item => ( item.bedroom === this.state.bedroom));
    const priceToShow = this.state.data.filter(item => ( item.price === this.state.price));
    const FurnishedToShow = this.state.data.filter(item => ( item.Furnished === this.state.Furnished));
    const PetToShow = this.state.data.filter(item => ( item.PetAllowed === this.state.PetAllowed));
    const SharedToShow = this.state.data.filter(item => ( item.SharedCommodities === this.state.SharedCommodities));
    const rr=this.state.rent;
    console.log(rr);
    
    return (
        <div>
        <Row>
          <Col xs={4}>
      <>
        <p className="h3 text-left font-weight-bold">Type Of Rent</p>

          <form >
          {rents.map((rent, index) => (
            <label key={index} style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
              {rent}
              <input   
              style={{display:"none"}}
                value={rent}
                checked={this.state.rent === rent}
                onChange={this.handleDuratuionChange}
                type="radio"
              />
            </label>
          ))}
        </form>
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
        <p>Bathroom</p>

          <form>
          {bathrooms.map((bathroom, index) => (
            <label key={index}  style={{border:"1px solid #CCC",width:"25px",margin:"15px"}}>
              {bathroom}
              <input               style={{display:"none"}}
                value={bathroom}
                checked={this.state.bathroom === bathroom}
                onChange={this.handleBathroomChange}
                type="radio"
              />
            </label>
          ))}
        </form>

  <p className="h3 text-left font-weight-bold">Amenities</p> 
        
      
        <Row>
            <Col sm><p className=""> Furnished</p></Col>
            <Col sm></Col>
            <Col sm>   
            <form> <input value="true" checked={this.state.Furnished === true } onChange={this.handleFurnishedchange}       type="radio"  />  </form>  </Col>
        </Row>
        <Row>
            <Col sm><p className=""> PetAllowed</p></Col>
            <Col sm></Col>
            <Col sm>   
            <form> <input value="true" checked={this.state.PetAllowed === true } onChange={this.handlePetchange} type="radio"  />  </form>  </Col>
        </Row>

        <Row>
            <Col sm><p> Shared Acommodities</p></Col>
            <Col sm></Col>
            <Col sm>   
            <form> <input value="true" checked={this.state.SharedCommodities === true } onChange={this.handleSharechange} type="radio"  />  </form>  </Col>
        </Row>
        
        <label column sm="4 ">
                Less Than IDR.
                </label>
        <input type="text"  onChange={this.handlePriceChange} value={this.state.price} />
         <Row>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm>   
            <Button className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
            </Col>
        </Row>

          </>
          </Col>

        <Col xs={8}>
          <>
          
          <Row>
      {bedroomsToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
          
                        <Card  data-div_id={item.id} onClick={this.handleCard}  style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <h5>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
      
          </Col>
        )
           
    })
}
</Row>
<Row>
      {rentToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
         <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p style={{backgroundColor:"white",width:"150px"}}>{Fur}</p>
                                  <p style={{backgroundColor:"white",width:"150px"}}>{Pet}</p>
                                  <h5 style={{backgroundColor:"white",width:"150px"}}>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Link>
          </Col>
      
        )
           
    })
}
</Row>
   
<Row>
      {bathroomsToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
         <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <h5>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Link>
          </Col>
      
        )
           
    })
}
</Row>

<Row>
      {priceToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
         <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p style={{backgroundColor:"white",width:"150px"}}>{Fur}</p>
                                  <p style={{backgroundColor:"white",width:"150px"}}>{Pet}</p>
                                  <h5 style={{backgroundColor:"white",width:"150px"}}>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Link>
          </Col>
      
        )
           
    })
}
</Row>
<Row>
      {SharedToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
         <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <h5>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Link>
          </Col>
      
        )
           
    })
}
</Row>
<Row>
      {PetToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
         <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <h5>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Link>
          </Col>
      
        )
           
    })
}
</Row>

<Row>
      {FurnishedToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index} key={item.id} id={item.id} >
            <Link to={{
              id:item.id,
              pathname: `/detailProperty/${item.id}`
            }} >
         <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <h5>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Link>
          </Col>
      
        )
           
    })
}
</Row>

         
          </>

          </Col>
        </Row>
      </div>

      
        
        
       
      
    );
  }
}
export default Filter;
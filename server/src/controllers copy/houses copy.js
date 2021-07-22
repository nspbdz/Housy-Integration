const { House, Citi } = require("../../models");
// const { v4: uuidv4 } = require("uuid");

exports.getHouses = async (req, res) => {
  try {
    // const citiesloop=houses.map(item =>{
    //   console.log(item.cities_id)
    // })
    const houses = await House.findAll({
     
      include: [
        {
          model: Citi,
          as: "city",
         
          attributes: {
            exclude: [ "cities_id", "createdAt", "updatedAt"],
          },
        },
       
      ],
    //   attributes: {
    //   exclude: [ "cities_id","createdAt", "updatedAt"],
    // },
      
    });
    // const houseloop=houses.map((item) => {
    //   return{
    //     // id: item.id,
    //     cities_id: item.cities_id,
    //     address: item.address,
    //     price: item.price,
    //     price: item.price,
    //     typeRent: item.typeRent,
    //     amenities: item.amenities,
    //     bathroom: item.bathroom,
    //     bedroom: item.bedroom,
    //     city:{
    //       id:item.city.id,
    //       name:item.city.name,
    //     }
      
    //   }

    // })
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: houses,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

// by id

exports.getHouse = async (req, res) => {
  try {
    const houses = await House.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Citi,
          as: "city",
          attributes: {
            exclude: [ "id","cities_id", "createdAt", "updatedAt"],
          },
        },
       
      ],
      
      // attributes: {
      //   exclude: ["cities_id","house_id","createdAt", "updatedAt"],
      // },

    });
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: houses,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

//create house
exports.createHouse = async (req, res) => {
  try {
    const houses = await House.create({
      ...req.body,
    });
    const HouseDataStored = await House.findOne({
      where: {
        name: req.body.name
      },
      include:{
        model:Citi,
        as:"city",
        attributes:{
          exclude:["createdAt", "updatedAt"],
        },
      },
      attributes:{
        exclude:["createdAt", "updatedAt"],
      },
    });


    res.send({
      status: "success",
      message: "resource has successfully created",
      data: {
        // id: HouseDataStored.id,
        address: HouseDataStored.address,
        price: HouseDataStored.price,
        price: HouseDataStored.price,
        typeRent: HouseDataStored.typeRent,
        amenities: HouseDataStored.amenities.split(","),
        bathroom: HouseDataStored.bathroom,
        bedroom: HouseDataStored.bedroom,
        city:{
          id:HouseDataStored.city.id,
          name:HouseDataStored.city.name,
        }
      },
    });
  } catch (error) {
    res.status(500).send({

      status: "failed",
      message: "internal server error",
    });
  }
};


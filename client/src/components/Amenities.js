import React, { useState,useEffect } from "react";
//  function Amenities() {
function Amenities({ amenities, setAmenities}) {

  const data = [
    {
      id: "Furnished",
    
    },
    {
      id: "Pet Allowed",
    //   name: "James",
    //   lastName: "Doe",
    //   age: "40"
    },
    {
      id: "Shared Accomodation",
    //   name: "Alexa",
    //   lastName: "Doe",
    //   age: "27"
    },
    
  ];
  const [values, setValues] = useState()

  const [peopleInfo, setPeopleInfo] = useState([
   {
      id: "",
     
    }
  ]);

// const [peopleInfo, setPeopleInfo] = useState([{}]);
 
//   console.log(peopleInfo);
//   console.log(peopleInfo? peopleInfo[1] : null);
  
  const handleDay  = (id) => {
//    const x=e.target.name
   console.log(id)
console.log(peopleInfo)

    setAmenities({
      amenities:peopleInfo                                                                            
    })
    }
    console.log(peopleInfo)

console.log(values)
// console.log(peopleInfo)
console.log(amenities)


  return (
    <div className="App">
      <table>
        <tr>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  width: "150px"
                }}
              >
                <input
                    onClick={ () => handleDay(item.id) }
                  onChange={(e) => {
                    // add to list
                    if (e.target.checked) {
                      setPeopleInfo([
                        ...peopleInfo,
                        {
                          id: item.id,
                        },
                      ]);
                    } else {
                      // remove from list
                      setPeopleInfo(
                        peopleInfo.filter((people) => people.id !== item.id),
                      );
                    }
                  }}
                  value={peopleInfo}
                  name={data}
                  style={{ margin: "20px" }}
                  type="checkbox"
                />
                <td style={{ margin: "20px" }}>{item.name}</td>
                <td style={{ margin: "20px" }}>{item.lastName}</td>
                <td style={{ margin: "20px" }}>{item.age}</td>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
}
export default Amenities;
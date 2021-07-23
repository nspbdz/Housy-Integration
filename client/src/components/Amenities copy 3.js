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
      id: ""
     
    }
  ]);


  
  const handleDay  = () => {

   console.log(peopleInfo)
   {peopleInfo?.length > 0 &&
    peopleInfo?.map((item, index) => {
       const dataPeople=item.id
       console.log(dataPeople)
       console.log(item)
      //  return setValues(dataPeople)
    }
    )}
    }
//     console.log(values)

// console.log(values)
// console.log(peopleInfo)
// console.log(amenities)
// var dataPeople=""

  // console.log(dataPeople)
console.log(peopleInfo)
const a=peopleInfo[0]
const b=peopleInfo[1]
console.log(a)
console.log(b)


useEffect(() => {
  handleDay();
}, []);
console.log(amenities)
// {peopleInfo? }
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
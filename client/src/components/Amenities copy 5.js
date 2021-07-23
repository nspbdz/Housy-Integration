import {useState} from "react";

function Amenities({ amenities, setAmenities}) {
  
  const [amen,setAmen] = useState([])
  const [amens,setAmens] = useState([])

 const handleCheckboxChange = event => {

  
    let newArray = [...amens, event.target.id];
    if (amens.includes(event.target.id) )
     {
      newArray = newArray.filter(day => day !== event.target.id);
    }
    setAmens(
      newArray
    );
  };
console.log(amens)

    return (
      <div>
        <form>
          <div>
            <h5>Select your workday(s):</h5>
            <div className="custom-control custom-checkbox ">
              <input
                type="checkbox"
                className="custom-control-input"
                id="Furnished"
                value="Furnished"
                onChange={handleCheckboxChange}
              />
              <label className="custom-control-label" htmlFor="Furnished">
                Furnished
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="Pet Allowed"
                value="Pet Allowed"
                onChange={handleCheckboxChange}
              />
              
              <label className="custom-control-label" htmlFor="Pet Allowed">
                Pet Allowed
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="Share Accomodation"
                value="Share Accomodation"
                onChange={handleCheckboxChange}
              />
              
              <label className="custom-control-label" htmlFor="Share Accomodation">
                Share Accomodation
              </label>
            </div>
          </div>
        </form>
        <button>Save settings</button>
      </div>
    );
  // }
}

export default Amenities;

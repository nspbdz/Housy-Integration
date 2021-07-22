import { InputGroup,FormControl } from "react-bootstrap";
import {useState,useRef} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'
import  "./customBtn.css"
// import "../styles/customBtn.css";

function TypeRent({ rent, setRent}) {
  const [clicked, setClicked] = useState();
  const elemRef = useRef(null);
  const handleColor = (event) => {
    // console.log("terpencet")
    const targets=event.target.name
   const monthh= document.querySelector('label[name=month]:checked')
    if(targets==="month"){
    monthh.classList.add("classColor")

    }
    // alert(event.target.name)
    // alert(  document.querySelector('label[name="' + targets + '"]:checked'));
    // const labelColor=document.querySelector('label[name="' + targets + '"]:checked')
    // labelColor.classList.add("classColor")
  }

    const handleDuratuionChange = useCallback(event => {
      // const targets=event.target.value
      setRent(event.target.value)
      setClicked(event.target.value)

    //  alert(  document.querySelector('input[name="' + targets + '"]:checked').value);
    //   var el=  document.querySelector('input[name="' + targets + '"]:checked')
    //   el.classList.add('cf')
    }, [setRent])
  
        const rents = ["day", "month", "year"];

        return (
            <>
        <p className="h3 text-left font-weight-bold">Type Of Rent</p>

          
        <form >
        {rents.map((rento, index) => (
            <label ref={elemRef} onClick={handleColor} name={rento} value={rento} key={index} style={{textAlign:"center", border:"1px solid #CCC",width:"70px",margin:"15px",height:"30px"}}>
              {rento}
              <input      
              style={{display:"none"}}
              // class="activee"
                value={rento}
                name={rento}
                checked={rent === rento ? true : false}

                // checked={rento==rent}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
          ))}
        </form>
           
            </>

        )
    
}
  
  export default TypeRent;

import React, {useEffect, useState, useRef} from 'react';
import  {Card} from 'react-bootstrap';

 function TypeRent(props) {
  const addedToGameGif = [];
  const [pressedGifId, gifPressed] = useState(null);
  const [photoCards, setPhotoCards] = useState([]);
  const elemRef = useRef(null);

  function Clicked(pressedGifId) {
  console.log(pressedGifId) 

  }
  
  useEffect(() => {
    Clicked(pressedGifId);
  }, [pressedGifId]);

  // add randomly picked photos to addedToGameGif array
  // ...
  const rents = ["day", "month", "year"];

  rents.map(gifId =>
    photoCards.push(
      <Card ref={elemRef} id={gifId} onClick={() => gifPressed(gifId)}>
        text
      </Card>
    )
  );

  return <div>{photoCards}</div>;
}
export default TypeRent
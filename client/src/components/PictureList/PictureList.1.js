import React from "react";
import "./PictureList.css";

const PictureList = (props) => (

  <ol>
    {props.pictures.map(image => (
      <li className="list-li" key={image._id}>
        <div className="picturelist-img-box text-center" > 
        <img onClick={() => props.viewPic(image._id)} 
        src={image.image}
        
        className="picturelist-img text-center" />
        <div><span className="picturelist-name">{image.name}</span><span className="picturelist-fav" onClick={() => props.addToFavorites(image._id)}>FAV</span></div>        
         </div>
      </li>
    ))}
  </ol>
  
);

export default PictureList;



{/* <ol>
    {props.pictures.map(image => (
      <li className="list-li" key={image._id}>
        <div className="picturelist-img-box text-center" > 
        <img onClick={() => props.viewPic(image._id)} 
        
        src={"http://localhost:3001/api/pictures/" + (image._id)}
        
        className="picturelist-img text-center" />
        <div><span className="picturelist-name">{image.name}</span><span className="picturelist-fav" onClick={() => props.addToFavorites(image._id)}>FAV</span></div>        
         </div>
      </li>
    ))}
  </ol> */}
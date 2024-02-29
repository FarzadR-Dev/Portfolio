import React, { useState, useEffect } from 'react';

function Gallery({game}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    // const imageFiles = importAll(require.context('./images/GameGal/Assetto', false, /\.(png|jpe?g|svg)$/));
    switch(game){
        case "assetto":
            setImages(importAll(require.context('./images/GameGal/Assetto', false, /\.(png|jpe?g|svg)$/)));
            break;
        case "bioshock":
            setImages(importAll(require.context('./images/GameGal/bioshockInfinite', false, /\.(png|jpe?g|svg)$/)));
            break;
        case "cyberpunk":
            setImages(importAll(require.context('./images/GameGal/Cyberpunk2077', false, /\.(png|jpe?g|svg)$/)));
            break;
        case "destiny":
            setImages(importAll(require.context('./images/GameGal/destiny2', false, /\.(png|jpe?g|svg)$/)));
            break;
        case "ffxv":
            setImages(importAll(require.context('./images/GameGal/ffxv', false, /\.(png|jpe?g|svg)$/)));
            break;
        case "minecraft":
            setImages(importAll(require.context('./images/GameGal/Minecraft', false, /\.(png|jpe?g|svg)$/)));
            break;
    }
  
    // console.log(imageFiles); // Log the imported image files to check if they are correct
  
  }, []);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default Gallery;
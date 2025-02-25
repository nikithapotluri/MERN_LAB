import React from 'react'
import './Gallery.css'
function Gallery() {
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP.aG9zvw__OnmZIaFeW_5_WAHaEF&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.LOibHnAzjVP2W9yFq_113gHaEK&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.LCZJFKcK1-Y9koEs91kSdAAAAA&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.pvP7wZDUaZK0lpxypt7VNwHaDt&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.KYWYQl772MZsvkxog3o2WwHaE3&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.x507cr6jzxhH5h5fbDd1cwHaE8&pid=Api&P=0&h=180"
  ];

  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div className="gallery-card" key={index}>
          <img src={src} alt={`Event ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
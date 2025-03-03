import React from 'react'

const Departments = () => {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP._MQN6_bPJfgyNsgai8y_-AHaEK&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.K8M4RYlaPHebpqkX-kQKfgHaD2&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.89kwfAnXk_mPm5Vd29z77gHaCV&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.5i76Sr3jZyS0G8SxBGZmlAHaDF&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.gxI58xUOB_4n08ONhyOTlQAAAA&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.lcd9b5YPBNsitvv1v8Dt3AHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.v-y_H64gvDbH5Pj6o-89JAHaEK&pid=Api&P=0&h=180"
  ];

  return (
    <div className="gallery-container">
  {images.map((src, index) => (
    <div key={index} className="gallery-card">
      <img src={src} alt={`Event ${index + 1}`} />
    </div>
  ))}
</div>

  );
};

export default Departments;

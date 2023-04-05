import React, { useState } from 'react';

function Card(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={{ 
        width: '300px', 
        height: '400px', 
        backgroundColor: '#F7F7F7', 
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1680634410-8ce1c916d7303904b932112282a6ba46.jpeg" 
        alt="Card Image" 
        style={{ width: '100%', height: 'auto' }}
      />
      <h3 style={{ margin: '20px 0 0 0' }}>Card Title</h3>
      {hovered && (
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: '#FFF', padding: '20px' }}>
          <p style={{ margin: 0 , display:'flex'}}>Date: {props.date}</p>       
          <p style={{ margin: 0 , display:'flex'}}>On your {props.years}th anniversary</p> 
          <p style={{ margin: 0 , display:'flex'}}>{props.description}</p>       
      
           </div>
      )}
    </div>
  );
}
export default Card;
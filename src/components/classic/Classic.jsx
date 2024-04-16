import React from 'react'
import "../classic/classic.css";
import Button from "react-bootstrap/Button";

export const Classic = () => {
    const classicitems = [
        {
          icon: "/assets/images/assets-cached - 2024-03-20T213144.430.jpg",
          text: "White",
        },
        {
          icon: "/assets/images/assets-cached - 2024-03-20T213327.610.jpg",
          text: "Black",
        },
        {
       
          icon: "/assets/images/assets-cached (93).jpg",
          text: "Transparent",
        },
        {
           
          icon: "/assets/images/assets-cached.jpg",
          text: "Original Image",
        },
       
      ];
  return (
    <div className='Classic-section'>
        <h5>Classics</h5>
        <div className="d-flex gap-3 py-2">
        {classicitems.map((item, index) => (
          <div className="classics-card" key={index}>
            <Button className="image-btn" size="lg">
              {
                item.id && (
                    <span className="pro-text-main">
                <span className="pro-text">Pro</span>
              </span>
                )
              }
              <img src={item.icon} alt={item.text} />
            </Button>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

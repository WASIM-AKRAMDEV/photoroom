import React from "react";
import "../tools/tools.css";
import Button from "react-bootstrap/Button";

export const Tools = () => {
  const toolitems = [
    {
      icon: "/assets/images/remover.svg",
      text: "Remove Background",
    },
    {
      icon: "/assets/images/retouch.svg",
      text: "Retouch",
    },
    {
        id:"pro",
      icon: "/assets/images/ai.svg",
      text: "AI",
    },
    {
        id:"pro",
      icon: "/assets/images/aishadow.svg",
      text: "AI Shadow",
    },
    {
      id:"pro",
      icon: "/assets/images/resize.svg",
      text: "Resize",
    },
  ];

  return (
    <div className="Tools-section">
      <h5>Tools</h5>
      <div className="d-flex gap-3 py-2">
        {toolitems.map((item, index) => (
          <div className="tools-card" key={index}>
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
  );
};

import React from "react";
import "../photoselector/photoselector.css";
import Button from "react-bootstrap/Button";
import { FiPlus } from "react-icons/fi";



export const Photoselector = () => {
  return (
    <div className="photoselector">
      <div className="photo-lines d-flex flex-column align-items-center justify-content-center">
        <h3>Start from a Photo</h3>
        <p>Drag and drop your image anywhere on this page</p>
        <span className="Or-cont">OR</span>
        <Button type="submit" className="d-flex align-items-center">
          <FiPlus className="plus-icon" />
          <span>Select a photo</span>
        </Button>
      </div>
    </div>
  );
};

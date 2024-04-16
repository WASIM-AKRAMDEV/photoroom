import React from "react";
import "../sidebar/sidebar.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { HiViewGridAdd } from "react-icons/hi";
import { ImStack } from "react-icons/im";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { TbFilePower } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Premodal } from "../premodal/Premodal";

export const Sidebar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="sidebar-section position-relative ">
      <div className="logo-main">
        <NavLink href="#" className="">
          <img src={`/assets/images/logo.svg`} alt="" />
        </NavLink>
      </div>
      <span className="line"></span>

      <Nav className="flex-column mt-2">
        <NavLink to="/" className="d-flex align-items-center nav-link">
          <HiOutlineViewGridAdd className="icon me-3" /> <p>Create</p>
        </NavLink>
        <NavLink to="/batch" className="d-flex align-items-center nav-link">
          {" "}
          <ImStack className="icon  me-3" />
          <p>Batch</p>
        </NavLink>
      </Nav>
      <span className="line mt-3"></span>
      <p className="text-content">Your Content</p>
      <Nav className="flex-column mt-2">
        <NavLink to="#" className="d-flex align-items-center nav-link">
          <PiPaintBrushBroadBold className="icon me-3" /> <p>Design</p>
        </NavLink>
        <NavLink to="#" className="d-flex align-items-center nav-link">
          {" "}
          <TbFilePower className="icon  me-3" />
          <p>Templates</p>
        </NavLink>
      </Nav>
      <Nav
        className="flex-column mt-2 position-absolute setting-nav"
        onClick={() => setModalShow(true)}
      >
        <NavLink to="#" className="d-flex align-items-center nav-link">
          <IoSettingsOutline className="icon me-3" /> <p>Preferences</p>
        </NavLink>
      </Nav>
      <Premodal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

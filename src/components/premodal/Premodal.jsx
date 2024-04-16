import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RxCross1 } from "react-icons/rx";
import "../premodal/premodal.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdPlayArrow } from "react-icons/md";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Modalbar } from "../../common-components/modal/Modalbar";

export const Premodal = (props) => {
  const [activeTab, setActiveTab] = useState("tab-3");
  const [modalShow, setModalShow] = useState({ Upgrade: false });
  const handleUpgradeClick = () => {
    setModalShow({ ...modalShow, Upgrade: true });
  };

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  const handleCloseModal = (modalId) => {
    setModalShow({ ...modalShow, [modalId]: false });
  };
  const featuresItems = [
    {
      icon: "./assets/images/gallery2.svg",
      text: "Generate realistic backgrounds and shadows",
    },
    {
      icon: "./assets/images/charge.svg",
      text: "Access to 1000+ pro templates",
    },
    {
      icon: "./assets/images/file.svg",
      text: "Edit up to 50 images simultaneously",
    },
    {
      icon: "./assets/images/hd.svg",
      text: "Export in high definition",
    },
    {
      icon: "./assets/images/remove.svg",
      text: "Remove Photoroom logo",
    },
    {
      icon: "./assets/images/kit.svg",
      text: "Generate realistic backgrounds and shadows",
    },

    {
      icon: "./assets/images/busket.svg",
      text: "Remove Photoroom logo",
    },
    {
      icon: "./assets/images/mobile.svg",
      text: "Generate realistic backgrounds and shadows",
    },
  ];
  return (

     <Modal 
     className="modal-mian"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
   
      dialogClassName="custom-modal"
      
    >
      <button className="close-button" onClick={props.onHide}>
        <RxCross1 size={18} />
      </button>

      <Modal.Body className="p-0 d-flex overflow-hidden">
        <div className="Nav-section">
          <Button className="account-btn">Account</Button>
          <Nav
            defaultActiveKey="tab-1"
            className="flex-column"
            onSelect={handleSelect}
          >
            <Nav.Link eventKey="tab-1">Your profile</Nav.Link>
            <Nav.Link eventKey="tab-2">Your billing</Nav.Link>
            <NavDropdown
              title={
                <>
                  <MdPlayArrow className="arrow-right" /> <span>Personal</span>{" "}
                </>
              }
              id="nav-dropdown"
              className="mt-4"
            >
              <NavDropdown.Item eventKey="tab-3">Preferences</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <div className="Tabs-section">
          <Tabs activeKey={activeTab} onSelect={handleSelect}>
            <Tab eventKey="tab-1">
              <h3 className="mb-4">Your subscription</h3>
              <div className="download-section">
                <h5>Language</h5>
                <Form.Select aria-label="Default select example" className="w-50">
                  <option>English</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Tab>
            <Tab eventKey="tab-2">
              <h3 className="my-4">Your subscription</h3>
              <div className="download-section">
                <div className="head d-flex">
                  <h5>Plan</h5>
                  <div className="free-cont">
                    <span>Free</span>
                  </div>
                </div>
                <div className="content d-flex">
                  <h5>Pro features</h5>
                  <div>
                    {featuresItems.map((items) => (
                      <div className="d-flex align-items-center gap-3 my-2">
                        <img src={items.icon} alt="" />
                        <p>{items.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-end align-items-end">
                  <Button
                    type="button"
                    className="upgrade-btn"
                    onClick={handleUpgradeClick}
                  >
                    Upgrade to Pro
                  </Button>
                </div>
                <Modalbar
                  show={modalShow.Upgrade}
                  onHide={() => handleCloseModal("Upgrade")}
                  id="Upgrade"
                />
              </div>
            </Tab>
            <Tab eventKey="tab-3">
              <h3>Default export</h3>
              <div className="download-section">
                <h5>Download file format</h5>
                <div>
                  <div className="my-4 d-flex flex-column gap-3">
                    <div className="d-flex gap-3">
                      <Form.Check type="radio" id="radio" checked />
                      <div>
                        <h5 className="m-0">Auto</h5>
                        <p className="radio-text m-0">
                          Save in .png if the image contains transparency or
                          text, otherwise save in .jpg
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Form.Check type="radio" id="radio" />
                      <div>
                        <h5 className="m-0">.png</h5>
                        <p className="radio-text m-0">
                          Bigger file size, transparency is saved
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Form.Check type="radio" id="radio" />
                      <div>
                        <h5 className="m-0">.jpg</h5>
                        <p className="radio-text m-0">
                          Smaller file size, transparency is not saved
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Form.Check type="radio" id="radio" />
                      <div>
                        <h5 className="m-0">.webp (Pro)</h5>
                        <p className="radio-text m-0">
                          Smallest file size, transparency is saved
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" switch-main">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Keep original file name"
                    />
                  </div>
                  <div className=" switch-main">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Download multiple photos as one zip file"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 mb-2">New features</h3>
              <div className="external-section">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Extend maximal batch capacity to 150 images"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </Modal.Body>
    </Modal>
   
  );
};

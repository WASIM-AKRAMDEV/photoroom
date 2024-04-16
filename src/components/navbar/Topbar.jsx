import React, { useState } from 'react';
import "../navbar/topbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modalbar } from '../../common-components/modal/Modalbar';

export const Topbar = () => {
  const [modalShow, setModalShow] = useState({
    signUp: false,
    logIn: false,
    Upgrade: false,
  });

  const handleSignUpClick = () => {
    setModalShow({ ...modalShow, signUp: true });
  };

  const handleLogInClick = () => {
    setModalShow({ ...modalShow, logIn: true });
  };

  const handleUpgradeClick = () => {
    setModalShow({ ...modalShow, Upgrade: true });
  }; 

  const handleCloseModal = (modalId) => {
    setModalShow({ ...modalShow, [modalId]: false });
  };

  return (
    <Navbar className="bg-white justify-content-end align-items-end py-3 px-3 sticky-top">
      <Form inline>
        <Row className='d-flex'>
          <Col xs="auto">
            <Button type="button" className='upgrade-btn' onClick={handleUpgradeClick}>Upgrade to Pro</Button>
          </Col>
          <Col xs="auto">
            <Button type="button" className='login-btn' onClick={handleLogInClick}>Log in</Button>
          </Col>
          <Col xs="auto">
            <Button type="button" className='signup-btn' onClick={handleSignUpClick}>Sign up</Button>
          </Col>
        </Row>
      </Form>
      <Modalbar show={modalShow.signUp} onHide={() => handleCloseModal('signUp')} id="signUp" />
      <Modalbar show={modalShow.logIn} onHide={() => handleCloseModal('logIn')} id="logIn" />
      <Modalbar show={modalShow.Upgrade} onHide={() => handleCloseModal('Upgrade')} id="Upgrade" />
    </Navbar>
  );
};

import React from 'react'
import "../batch/batch.css"
import Button from 'react-bootstrap/Button';
import { RxCross1 } from 'react-icons/rx';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoApple } from 'react-icons/io5';
import { NavLink } from 'react-bootstrap';

export const Batch = () => {
  return (
    <div className='batch-section w-100 h-100 d-flex justify-content-center align-items-center'>
      <div className="batch-cont d-flex flex-column align-items-center">
      <div className="image-cont">
          <img src={`./assets/images/R.svg`} alt="" />
        </div>
        <div className="inner-content">
          <h4 className="text-center">Log in to Photoroom</h4>
          <div className="d-grid button-main mt-4">
            <Button className="google-btn d-flex justify-content-center align-items-center">
              <img src={`/assets/images/google.svg`} alt="" />
              <span>Continue with Google</span>
            </Button>
            <Button className="facebook-btn">
              <IoLogoFacebook className="facebook-icon" />
              <span>Continue with Facebook</span>
            </Button>
            <Button className="apple-btn">
              <IoLogoApple className="apple-icon" />
              <span>Continue with Apple</span>
            </Button>
            <span className="Or-cont">OR</span>
            <Button className="email-btn">
              Continue with Apple
            </Button>
        
              <NavLink href="#" className="signin-link">
                How to Sign in?
              </NavLink>
         
            <p className="end-text mx-auto">
              By signing up, you agree to our
              <a className="anker-link" href="#">
            
                Terms of Service
              </a>
              and
              <a className="anker-link" href="#">
            
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

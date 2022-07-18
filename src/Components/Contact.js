import React from 'react'
import { BsFacebook,BsTelephoneOutbound} from 'react-icons/bs';
import { AiFillTwitterCircle ,AiFillGooglePlusCircle, } from 'react-icons/ai';
import {TiSocialYoutubeCircular} from 'react-icons/ti';
import { GoLocation } from 'react-icons/go';


function Contact() {
  return (
    <>

    <section className='container contactCondainer'>
    <div className="row">
    <div className="col">
      <div className='my-4'><h4><span className='web'>Web </span><span className='uiexpert'>UiExpert</span></h4></div>
      <div className='my-5'><h6>The full-stack design team who focuses on digital products whatever they are.</h6></div>
      <div className='my-4'>
        <BsFacebook  className="mx-2" fontSize={'26px'}/>
        <AiFillTwitterCircle className="mx-2"  fontSize={'30px'}/>
        <AiFillGooglePlusCircle className="mx-2"  fontSize={'30px'}/>
        <TiSocialYoutubeCircular className="mx-2"  fontSize={'35px'}/>
      </div>
    </div>

    <div className="col">
      <h4 className='about-contact'>About Us</h4>
      <p className='about-contact my-3'>We're Hiring</p>
      <p className='about-contact my-3'>Our Customer</p>
      <p className='about-contact my-3'>Blog Post</p>
      <p className='about-contact my-3'>Help & Support</p>
    </div>
    <div className="col">
    <h4 className='about-contact'>Community</h4>
      <p className='about-contact my-3'>About us</p>
      <p className='about-contact my-3'>Our clients</p>
      <p className='about-contact my-3'>Legal notic</p>
    </div>
    <div className="col">
    <h4 className='about-contact'>Contact</h4>
      <p className='about-contact my-3'><span className='mx-2'><BsTelephoneOutbound/></span>+123 456 789</p>
      <p className='about-contact my-3'><span className='mx-2'><GoLocation/></span>Contact Us</p>

    </div>
  </div>
  
</section>

    </>
  )
}

export default Contact
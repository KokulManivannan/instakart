import React, { useState } from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import './carousel.css'
import { HiChevronDoubleRight} from 'react-icons/hi';
import { HiChevronDoubleLeft} from 'react-icons/hi';

const Carousel = () => {
  const [slide,setSlide]=useState(0);
  const img=[img2,img1,img3];

  const handleRight = () =>{
     if(slide === img.length-1){
        setSlide(0);
     }
     else{
        setSlide(slide+1);
     }
  }

  const handleLeft = () =>{
    if(slide === 0){
        setSlide(img.length-1);
    }
    else{
        setSlide(slide-1);
    }
  }

  return (
    <div className='carousel-cont'>
      <img className='carousel-img' src={img[slide]} alt=""></img>
      <HiChevronDoubleRight className='carousel-right' onClick={handleRight}/>
      <HiChevronDoubleLeft className='carousel-left' onClick={handleLeft}/>
    </div>
  )
}

export default Carousel

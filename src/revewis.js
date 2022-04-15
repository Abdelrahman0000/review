import React, { useState } from 'react';
import people from './data';
import{FaChevronRight,FaChevronLeft,FaQuoteRight} from'react-icons/fa'
export default function Revewis() {

    

   const[index,setIndex]=useState(0);
   const checknum=((number)=>{
       if(number>people.length -1){
           return 0;
       }
       if(number<0){
        return people.length -1;
    }
    return number;
   })
const prev=()=>{
   setIndex((index)=>{
       let newindex=index-1;
       return checknum(newindex);
   })
}

const next=()=>{
  
    
    setIndex((index)=>{
        let newindex=index+1;
        return checknum(newindex);
    })
    }
    const randome=()=>{
      let rand=  Math.floor(Math.random()*people.length)
      if(rand===index){
          rand=index+1;
      }
      setIndex(checknum(rand))
    }
   const {job,image,name,text}=people[index];
  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prev}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={next}>
                <FaChevronRight />
            </button>
          
        </div>
        <button className='random-btn' onClick={randome}>
               surbrise me
            </button>
    </article>
  )
}

import React from 'react'
import CV from '../../assets/Bhavin_resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}  className='btn' target='_blank' rel="noreferrer">Download CV</a>
        <a href='#contact' className='btn btn-primary' >Contact</a>
    </div>
  )
}

export default CTA
import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SpecialOffer = () => {
  return (
    <div className='max-container flex justify-wrap items-center max-xl:flex-col-reverse mt-9 gap-10'>
      <div className='flex-1'>
         <img src={offer} width={773} height={687} className='object-contain'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold capitalize'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='info-text mt-5 
        lg:max-w-xl'>
          Embark on a shopping journey that redefines your experience
          with unbeatable deals. From premier selections to incredible 
          savings, we offer unparalleled value that sets us apart.<br/><br/>
          Navigate a realm of possibilities designed to fulfill your 
          unique desires, surpassing the loftiest expectations.
          Your journey with us is nothing short of exceptional.
        </p>
        <div className='mt-9'>
          <div className='flex gap-4'>
          <Button title='Shop now' icon={arrowRight}/>
          <Button title='Learn more'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer
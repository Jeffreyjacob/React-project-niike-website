import React from 'react'

const Button = ({title,icon}) => {
  return (
    <button className='flex justify-center items-center
     gap-2 px-7 py-4 border font-montserrat text-white
     leading-none text-lg bg-coral-red rounded-full border-coral-red'>
      {title}
      {
        icon &&
             <img src={icon}
             className='ml-2 rounded-full w-5 h-5'
             alt='arrowright'/>
      }
      </button>
  )
}

export default Button
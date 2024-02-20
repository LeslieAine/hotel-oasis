import React from 'react'

import ColorButton from "./ColorButton"

const BestRoomCard = ({img , adults, size, name, description, price, linkTo}) => {
  return (
    <div className='w-full relative group'>
        <div className='w-full h-40 overflow-hidden'>
            <img src={img} alt=""  className='object-cover w-full group-hover:scale-110 duration-500'/>
            <div className='absolute top-32 bg-black text-white px-3 h-8 flex flex-row items-center gap-3 font-normal text-sm'>
                <div>Adults: {adults}</div>
                <div>Size: {size}ft</div>
            </div>
        </div>
        <div className='bg-black p-5 flex flex-col gap-3 text-left'>
          <div className='text-white font-btnFont text-3xl'>{name}</div>
          <div className='text-fontClrGrey font-normal'>{description}</div>
        </div>
        <div className='flex items-center justify-between px-5 pb-5 bg-black'>
          <div className='flex gap-2 text-lg'>
            <div className='text-primaryClr'>€{price}</div>
            <div className='text-fontClrGrey font-normal'>per night</div>  
          </div>
          <ColorButton text="book" url={linkTo} />
        </div>
    </div>
  )
}

export default BestRoomCard
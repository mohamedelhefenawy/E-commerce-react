import React from 'react'

export default function Title({text1,text2}) {
  return (
    <div className='inline-flex gap-2 items-center mb-2'>
        <p className='text-gray-500 text-4xl'>{text1} <span className='text-gray-800 font-medium'>{text2}</span></p>
        <p className='w-12  h-[2px] bg-gray-700'></p>
    </div>
  )
}

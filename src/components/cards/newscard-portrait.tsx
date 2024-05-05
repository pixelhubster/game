import React from 'react'

const NewsCardPortrait = () => {
  return (
    <div className='w-[13rem] h-[15rem] bg-gray-400 flex-shrink-0 m-1 rounded-sm cursor-pointer'>
        <div className='w-full h-[11rem] bg-yellow-500 flex items-center justify-center'>img</div>
        <p className='p-2 text-sm h-auto'>The new headline and the information, link</p>
    </div>
  )
}

export default NewsCardPortrait
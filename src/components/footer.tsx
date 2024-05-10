import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:h-[30rem]  bg-gray-700/50 mt-10'>
        <div className='w-full bg-red-100 lg:px-[15rem] p-3 flex justify-between items-center'>
          Subscribe to our newsletter
          <div className='bg-white p-1 rounded-sm'>
            <input type="email" name="email" id="sub_email" placeholder='example@email.com' className='p-1 px-4 outline-none rounded-sm placeholder:text-gray-500 placeholder:text-sm'/>
            <input type="button" value="Subscribe"  className='mx-2 p-1 px-4 bg-blue-200 rounded-sm text-sm' />
          </div>
        </div>
      <div className='w-full h-full p-5 lg:px-[15rem] px-2 flex max-sm:flex-col '>
        <div className='bg-gray-100 p-2 w-1/4 h-fit max-sm:w-full'>
          <h3 className='font-bold pb-2'>Links & Pages</h3>
          <ul>
            <li>The zoo</li>
            <li>Link one</li>
            <li>Link one</li>
            <li>Link one</li>
          </ul>
        </div>
        <div className='bg-gray-100 p-2 w-1/4 h-fit max-sm:w-full'>
          <h3 className='font-bold pb-2'>Services</h3>
          <ul>
            <li>The zoo</li>
            <li>Link one</li>
            <li>Link one</li>
            <li>Link one</li>
          </ul>
        </div>
        <div className='bg-gray-100 p-2 w-1/4 h-fit max-sm:w-full'>
          <h3 className='font-bold pb-2'>Sponsorship & Advertisement</h3>
          <ul>
            <li>The zoo</li>
            <li>Link one</li>
            <li>Link one</li>
            <li>Link one</li>
          </ul>
        </div>
        <div className='bg-gray-100 p-2 w-1/4 h-fit max-sm:w-full'>
          <h3 className='font-bold pb-2'>Contact</h3>
          <ul>
            <li>The zoo</li>
            <li>Link one</li>
            <li>Link one</li>
            <li>Link one</li>
          </ul>
        </div>




      </div>
      <div className='w-full flex justify-center items-center text-sm p-2'>copyright @2024</div>
    </div>
  )
}

export default Footer
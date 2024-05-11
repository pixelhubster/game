import React from 'react'

const Signup = () => {
  return (
    <div className='w-[30rem] pb-10 bg-gray-50 p-3'>
    <div className='w-full p-3 bg-sky-400'>
        <h3 className='text-lg'>Join our news creator page</h3>
    </div>
    <div className='w-full bg-yellow-0 shrink p-3'>
        <p className='text-red-300'>Password does not match</p>
        <div className='my-5'>
            <p className='my-1 bg-red-00'>Email</p>
            {/* <p className='text-sm py-1'>email doesnt exist</p> */}
            <input type="email" name="email" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='example@email.com' />
        </div>
        <div className='my-5'>
            <p className='my-1 bg-red-00'>Choose Password</p>
            {/* <p className='text-sm py-1'>email doesnt exist</p> */}
            <input type="password" name="password" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='*********' />
        </div>
        <div className='my-5'>
            <p className='my-1 bg-red-00 text-sm'>Confirm Password</p>
            {/* <p className='text-sm py-1'>email doesnt exist</p> */}
            <input type="password" name="password" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='*********' />
        </div>
        <div className='my-5'>
            <p className='my-1 bg-red-00'>OTP</p>
            {/* <p className='text-sm py-1'>email doesnt exist</p> */}
            <input type="tel" name="otp" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='000000' />
        </div>

        <button type="submit" className='w-full p-2 bg-blue-400 rounded-sm'>Register</button>
        <div className='w-full flex justify-between items-center py-2'>
            <a href="/creator/auth/signin" className='text-sm text-blue-900 hover:underline underline-offset-1'>Yes, I have an account</a>
        </div>
    </div>

</div>
  )
}

export default Signup
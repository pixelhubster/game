import React from 'react'

const page = () => {
    return (
        <div className='w-full h-screen p-5 bg-green-400 flex flex-col justify-center items-center'>
            <div className='w-[30rem] pb-10 bg-gray-50 p-3'>
                <div className='w-full p-3 bg-sky-400'>
                    <h3 className='text-lg'>Recover Account</h3>
                </div>
                <div className='w-full bg-yellow-0 shrink p-3'>
                    {/* <p className='text-red-300'>Username and Password is incorrect</p> */}
                    <div className='my-5'>
                        <p className='my-0 bg-red-00'>Email</p>
                        <p className='text-sm text-red-300 py-1 px-0'>Account not found</p>
                        <input type="email" name="email" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='example@email.com' />
                    </div>

                    <button type="submit" className='w-full p-2 bg-blue-400 rounded-sm'>Send OTP</button>
                </div>

            </div>

            {/* verify otp */}
            <div className='w-[30rem] pb-10 bg-gray-50 p-3'>
                <div className='w-full p-3 bg-sky-400'>
                    <h3 className='text-lg'>Recover Account</h3>
                </div>
                <div className='w-full bg-yellow-0 shrink p-3'>
                    {/* <p className='text-red-300'>Username and Password is incorrect</p> */}
                    <div className='my-5'>
                        <p className='my-0 bg-red-00'>OTP</p>
                        <p className='text-sm text-red-300 py-1 px-0'>OTP incorrect</p>
                        <input type="tel" name="otp" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='0000' />
                    </div>

                    <button type="submit" className='w-full p-2 bg-blue-400 rounded-sm'>Verify</button>

                </div>

            </div>

            {/* change password */}
            <div className='w-[30rem] pb-10 bg-gray-50 p-3'>
                <div className='w-full p-3 bg-sky-400'>
                    <h3 className='text-lg'>Recover Account</h3>
                </div>
                <div className='w-full bg-yellow-0 shrink p-3'>
                    <p className='text-red-300'>Password does not match</p>

                    <div className='my-5'>
                        <p className='my-1 bg-red-00'>Choose New Password</p>
                        {/* <p className='text-sm py-1'>email doesnt exist</p> */}
                        <input type="password" name="password" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='*********' />
                    </div>
                    <div className='my-5'>
                        <p className='my-1 bg-red-00 text-sm'>Confirm Password</p>
                        {/* <p className='text-sm py-1'>email doesnt exist</p> */}
                        <input type="password" name="password" id="" className='w-full p-1 px-4 outline-none outline-1 outline-gray-200' placeholder='*********' />
                    </div>

                    <button type="submit" className='w-full p-2 bg-blue-400 rounded-sm'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default page
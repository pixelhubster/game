import React from 'react'

const NewscardLandscape = () => {
    return (
        <div className='w-full h-[9rem] bg-gray-400 flex-shrink-0 mb-2 rounded-sm cursor-pointer flex'>
            <div className='w-[12rem] h-[9rem] bg-yellow-500 flex items-center justify-center mr-2 shrink-0'>img</div>
            <div className='p-2 text-md h-full py-3 flex flex-col'>
                <p className='w-full h-1/3 line-clamp-2 text-sm mb-1 overflow-hidden font-semibold'>Header should be long and this should be the longest header ever seen and should be used as a test to show whether this is good
                make this a little longer and check whether or not it should be good aor maybe a looo toooooo</p>
                <p className='h-1/3 text-sm line-clamp-2 mb-4'>Subheader Header should be long and this should be the longest header ever seen and should be used as a test to show whether this is good
                make this a little longer and check whether or not it should be good aor maybe a looo toooooo</p>
                <p className='h-fit bg-red-0 flex items-end text-[12px] text-gray-800'>12 hours ago</p>
            </div>
        </div>
    )
}

export default NewscardLandscape
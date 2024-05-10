import React from 'react'

const Slideshow = ({props} :{
    props: {
        header: string,
        subheader: string,
    }
}) => {
    return (
        <div className="w-full bg-green-300 h-[40rem] rounded-md flex overflow-hidden flex-col justify-between">
            <div className="w-full h-2 bg-gray-300">
                <div className="w-full bg-slate-500 h-full"></div>
            </div>
            <div className="w-1/2 h-[50%] p-3 bg-red-200">
                <p className='text-lg'>
                {props.header}
                </p>
                <p className='text-md'>
                    {props.subheader}
                </p>
            </div>
        </div>
    )
}

export default Slideshow
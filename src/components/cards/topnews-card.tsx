import React from 'react'

const TopnewsCard = ({ props, config }: {
    props: {
        header: string,
        subheader: string,
    },
    config?: {
        author: string,
        time: string,
    }
}) => {
    return (
        <div className="w-full h-1/2 bg-green-300 flex flex-col justify-end max-lg:w-1/2 max-lg:h-full max-lg:flex-row">
            <div className='w-full'>a</div>
            <div className="w-full h-[30%] p-3 bg-red-200 max-lg:h-full">
                <p className='text-md'>
                    {props.header}
                </p>
                {config?.author && (
                    <p className='text-[12px] py-2 text-gray-800'>
                        {config.time} - by {config.author}
                    </p>
                )}
            </div>
        </div>
    )
}

export default TopnewsCard
import React from 'react'
import NewscardLandscape from '../cards/newscard-landscape'

const GeneralCat = () => {
    return (
        <div className="bg-red-300 w-full shadow-sm mt-10 mb-10">
            <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">General</div>
            <div className="w-full h-full p-2 pb-20 relative">
                <span className='w-[3rem] h-[3rem] flex justify-center items-center bg-white scale-95 cursor-pointer rounded-full text-sm absolute bottom-5 shadow-md right-1/2 z-0'>refresh</span>
                <NewscardLandscape />
                <NewscardLandscape />
                <NewscardLandscape />
                <NewscardLandscape />
                <NewscardLandscape />
            </div>
        </div>
    )
}

export default GeneralCat
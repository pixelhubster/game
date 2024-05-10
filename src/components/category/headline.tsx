import React from 'react'
import HeadlineCard from '../cards/headline-card'

const HeadlineCat = () => {
    return (

        <div className="bg-red-100 w-full shadow-sm mb-10">
            <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">Headline</div>
            <div className="w-full h-full p-1 py-2">
                <HeadlineCard />
                <HeadlineCard />
                <HeadlineCard />
            </div>
        </div>

    )
}

export default HeadlineCat
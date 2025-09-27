"use client"

const IntroCard = ({type, showDescription, onClick}) => {
    return (

        <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClick?.(); }} 
            className={`
                w-40 h-30
                rounded-2xl
                bg-orange-400
                transition-transform hover:scale-110 
                ${showDescription ? "scale-110" : ""}
            `}>
            {type}
        </button>
    )
}

export default IntroCard

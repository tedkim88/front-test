

const IntroCard = ({type}) => {
    return (
        <div className='rounded-2xl odd:bg-purple-400 even:bg-yellow-500 p-12 text-xl'>
            {type}
        </div>
    )
}

export default IntroCard
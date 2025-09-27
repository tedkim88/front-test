"use client"
import IntroCard from '@/components/IntroCard'
import {useState} from 'react'

const Description = {
  Speed: "40 Yard Dash: Measures straight-line acceleration and sprinting speed. Common in football and other field sports.",
  Agility: "T-Test: Assesses agility with forward, lateral, and backward movements. Useful for sports requiring quick direction changes.\n\n5-10-5 Shuttle Run: Evaluates quick starts, acceleration, change of direction, and re-acceleration. Widely used in football testing.",
  Jump: "Broad Jump: Tests lower-body explosive power and coordination by jumping forward from a standstill.\n\n Vertical Jump: Measures vertical lower-body power, key for basketball, volleyball, and soccer athletes.",
  Reaction: "Measures how quickly an athlete responds to visual or auditory signals, important for goalkeepers and defenders.",
  Grit: "Evaluates perseverance, resilience, and the ability to maintain performance under pressure.",
};

const types =Object.keys(Description);

export default function About() {
  const [showDescription, setDescription] = useState(null)
  return (
    //Haoyu
    <div className="flex flex-col p-4 items-center justify-center min-h-[calc(100vh-80px)]" onClick={() => setDescription(null)}>
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-8">
        Introduction
      </h1>
      <p className='mt-4 text-center max-w-2xl text-lg animate-slideFadeIn'>
        Baseline Testing is the measurement of an athlete’s starting performance levels, used to track progress and guide training.
      </p>
      {/* Introduction cards part */}
     
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 justify-items-center p-3'>
        {types.map((card) => (
          <IntroCard
            key={card}
            type={card}
            showDescription={showDescription === card}
            onClick={() => setDescription(prev => (prev === card ? null : card))}
          />
        ))}
      </div>
      <div className="mt-6 min-h-[72px] text-center text-lg whitespace-pre-line max-w-2xl">
        {showDescription ? Description[showDescription] : null}
      </div> 
    </div>

  )
}



import IntroCard from '@/components/IntroCard'
import React from 'react'

function About() {
  return (
    //Haoyu
    <div className="flex flex-col p-4 items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-8">
        Introduction
      </h1>
      <p className='mt-4 text-center max-w-2xl text-lg animate-slideFadeIn'>
        Baseline Testing is the measurement of an athlete’s starting performance levels, used to track progress and guide training.
      </p>
      {/* Introduction cards part */}
      <div className='flex gap-4 justify-between p-3'>
        <IntroCard type="Speed" />
        <IntroCard type="Agility" />
        <IntroCard type="Jump" />
        <IntroCard type="Reaction" />
        <IntroCard type="Grit" />
      </div>
    </div>

  )
}

export default About
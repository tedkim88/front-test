import React from 'react'
import AthleteDataTable from '@/components/AthleteDataTable'
import mockAthletes from '@/lib/mockdb'
import { columns } from '@/components/AthleteTableColumns'

function ViewAllAthletes() {
  return (
    //Jaxsen
    <div className='max-w-7xl mx-auto overflow-y-auto relative' style={{ height: 'calc(100vh - 65px)' }}>
      <div className='flex flex-col gap-4 pt-10 pb-4 px-4 max-h-full'>

          <div className="flex flex-col">
            <h1 className='text-3xl font-bold text-primary font-mono tracking-wider'>View All Athletes</h1>
            <p className='font-mono text-sm text-gray-400'>View all athletes and their test records</p>
          </div>


            <AthleteDataTable data={mockAthletes} columns={columns} />
      </div>
    </div>
  )
} 

export default ViewAllAthletes 
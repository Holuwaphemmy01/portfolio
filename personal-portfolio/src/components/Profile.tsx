import React from 'react'
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';


 export const Profile = () => {
  return (
   <aside className='max-w-3xl border m-6 
      border-neutral-600 bg-neutral-900
      text-white p-6 rounded-lg lg:sticky'>
    <div className="">
        <div className="">
            <h1 className="">Oluwafemi</h1>
            <p className="">Software Engineer</p>
        </div>
        <img 
            src="/avatar.jpg" 
            alt="Oluwafemi"
            className='lg:w-96 rounded-2xl object-cover' 
        />

        <div className=''>
            <p className="">Specialization: </p>
            <p className="">Full stack Developer</p>

        </div>
    </div>
   </aside>
  )
}


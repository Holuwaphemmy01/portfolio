import React from 'react'
import {motion} from 'motion/react';
import {  staggerContainer } from '@/lib/animation';

import {projectsData} from '@/constants';
import { Section } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';


export const Projects = () => {
  return (
   <motion.section
    initial="hidden"
    whileInView='visible'
    viewport={{ once: true, amount: 0.3}}
    variants={staggerContainer(0)}
    className='mt-30 scroll-mt-10'
    id='projects'
   >
        <SectionHeader 
            subtitle="Projects" 
            title="My featured projects"
        />
   </motion.section>
  )
}



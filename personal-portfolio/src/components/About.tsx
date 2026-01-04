import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animation";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";


export const About = () => {
  return (
   <motion.section
           initial="hidden"
           whileInView='visible'
           viewport={{ once: true, amount: 0.3}}
           variants={staggerContainer(0)}
           className='mt-30 scroll-mt-10'
           id='about'
    >
        <SectionHeader 
            subtitle="About" 
            title="Engineering seamless experiences across the stack."
        />

        <motion.p 
            variants={fadeUp}
            className="mt-4 text-neutral-300"
        >
            I build full‑stack applications with a focus on clean, 
            maintainable code and intuitive user interfaces. 
            From designing responsive front‑end experiences to 
            architecting robust back‑end systems, 
            I strive to deliver solutions that are scalable, efficient, 
            and user‑friendly. My goal is to bridge creativity with technical precision, 
            ensuring every project not only works seamlessly but also provides 
            lasting value to users and businesses alike.        
        </motion.p>



        <motion.p 
            variants={fadeUp}
            className="mt-2 text-neutral-300"
        >
                Over the years, I’ve honed my skills across a wide range of 
                technologies, enabling me to adapt seamlessly to diverse project 
                requirements and challenges. I thrive in collaborative environments, 
                working closely with cross‑functional teams and learning from 
                different perspectives to deliver impactful solutions. 
                Driven by curiosity and a commitment to growth, I continuously refine 
                my craft to stay at the forefront of the ever‑evolving tech landscape.
        </motion.p>

        <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
        >
            <Button className="mt-5">  Contact Me </Button>
        </motion.div>
   </motion.section>
  )
}


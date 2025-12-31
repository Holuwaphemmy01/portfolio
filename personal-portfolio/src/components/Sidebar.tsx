import React from 'react'
import { useState } from 'react';
import  {Sheet, SheetContent, SheetTitle, 
    SheetTrigger} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { navLinks, socialLinks } from '@/constants';


export const Sidebar = () => {
    const [active, setActive] = useState('#Hero');
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
            <Button variant='ghost' 
            size='icon'
            className='m-4 fixed top-4 right-4 z-50
            border-2 hover:border-primary bg-neutral-800 
            py-5 px-5 hover:text-primary cursor-pointer'
        > 
                <MenuIcon size={30}/> 
            </Button>
        </SheetTrigger>
        <SheetContent 
            side='right' 
            className='w-84  bg-neutral-900  text-white
            py-6 pl-10'
            bg-neutral-900
        >
            <SheetTitle className='text-lg
            font-semibold'>Menu</SheetTitle>

            <nav className='flex flex-col gap-4'>
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a href={link.link}>
                            <Icon /> {link.label}
                        </a>
                    );
                })}
            </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}


'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import  useScroll  from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

const Header = () => {

    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return(
        <div 
            className={cn(
                `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200  h-[127px]`,
                {
                    "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
                    "border-b border-gray-200 bg-white": selectedLayout,
                }
            )}
        >
            <div className='bg-red-100 flex items-centers px-4 justify-between h-1/2 items-center'>
                <div className='bg-red-200 '>
                    Logo
                </div>
                <div className='bg-red-200 w-1/2 rounded-r-full rounded-l-full h-8'>
                    Što tražiš?
                </div>
                <div className='bg-red-200 flex'>
                    <div className='bg-red-300 mx-2 rounded-r-full rounded-l-full h-8'>Hej! Prijavi se ili registriraj</div>
                    <div className='bg-red-300 mx-1 h-8 w-8 rounded-full'></div>
                    <div className='bg-red-300 mx-1 h-8 w-8 rounded-full'></div>
                </div>
            </div>

            <div className='bg-blue-100 flex h-1/2 items-center'>
                <div className='bg-blue-200 '>
                    Col 1
                </div>
                <div className='bg-blue-200'>
                    Col 2
                </div>
                <div className='bg-blue-200'>
                    Col 3
                </div>
            </div>
            {/*

            <div className="flex h-[127px] items-center justify-between px-4">
                <div className='flex'>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className='flex flex-row space-x-3 items-center justify-center'
                        >
                            <span className='h-7 w-7 bg-zinc-300 rounded-lg' />
                            <span className='font-bold text-xl flex'>Logo</span>
                        </Link>
                    </div>

                    <div className='hidden md:block'>
                        <div className='h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center'>
                            <span className='font-bold text-sm'>HQ</span>
                        </div>
                    </div>
                    <div className='bg-red-400'>
                        Hello
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        Hello 2
                    </div>
                </div>
            </div>
        */  }
        </div>
    )
}

export default Header
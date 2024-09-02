"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { MenuList } from '../_contents'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import UsageTrack from './UsageTrack'

function SideNav() {   

    const path = usePathname();
    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <Link href="/"><div className='flex justify-center border-b'>
                <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
            </div>
            </Link>
            <hr className='my-6 border' />
            <div className='mt-10'>
                {
                    MenuList.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center 
                              ${path == menu.path && 'bg-primary text-white'}
                            `}>
                                <menu.icon className='h-6 w-6' />
                                <h2 className='text-lg'>{menu.name}</h2>

                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="absolute bottom-10 left-0 w-full">
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav
import { Search } from 'lucide-react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { UserButton, useUser } from '@clerk/nextjs'
import { MenuList } from '../_contents'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog } from '@radix-ui/react-dialog'

function Header() {
  const { user } = useUser()
  const path = usePathname()
  return (
    <>
      <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
        <div className="flex gap-2 items-center p-2  rounded-md max-w-lg bg-white">
          {/* <Search/>
        <input type='text' placeholder='Search...' className='outline-none'/> */}
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt='logo'
              width={75}
              height={75}
              className='lg:hidden md:hidden' />
          </Link>
          <ul className="flex lg:hidden md:hidden ml-3">
            {
              MenuList.map((value, index) => {
                return (
                  // <li key={index} className="mr-6 border-none outline-none">
                  //   <a className="hover:bg-primary hover:text-white" href={value.path}>{value.name}</a>
                  // </li>
                  <li key={index} className="mr-3">
                    <a className={`inline-block border border-primary text-sm rounded py-1 px-3 hover:bg-primary hover:text-white ${path == value.path && 'bg-primary text-white'}`} href={value.path}>{value.name}</a>
                  </li>
                )
              })
            }

          </ul>
        </div>
        <div className='flex sm:gap-2 lg:gap-5 items-center'>
          <Button className='text-xs p-2' >{user?.fullName}</Button>
          <UserButton />
        </div>
      </div>
    </>
  )
}

export default Header
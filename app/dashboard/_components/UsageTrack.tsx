"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { getUserData } from '../databaseOperation'

export var totalCreditsOfUser = 0;
function UsageTrack() {

    const {user} = useUser()
    const {totalUsage,setTotalUsage} = useContext(TotalUsageContext)
    const {totalCredits, setTotalCredits} = useContext(TotalUsageContext)
    // const {totalCredits, setTotalCredits} = useContext(TotalCreditsContext)
    //const [totalCredits, setTotalCredits] = useState<number>(0)
    const getData=async()=>{
        const result = await getUserData(user?.primaryEmailAddress?.emailAddress ?? "")
        if(result !== null){
            getTotalUsage(result)
        }
    }
    

    useEffect(()=>{
        user&&getData()
        totalCreditsOfUser = totalCredits
    },[user])

    const getTotalUsage=(result:any)=>{
        let total:number=0
        let plan:string= result[0].userPlan
        result.forEach((value: { aiResponse: string | any[] })=>{
            total = total + Number(value.aiResponse?.length) 
        })
        //setTotalUsage(total)
        setTotalUsage(total)
        if(plan === "enterprise"){
            setTotalCredits(200000)
        }
        else if(plan === "team"){
            setTotalCredits(50000)
        }
        else{
            setTotalCredits(10000)
        }
    }
    
    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg '>
                <h2 className='font-medium'>Credits</h2>
                <div className="h-2 bg-[#808080] w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full " style={{
                        width:(totalUsage/totalCredits)*100+"%"
                    }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{totalCredits} credit used</h2>
            </div>
            <Link href={"/dashboard/billing"}><Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button></Link>
        </div>
    )
}

export default UsageTrack
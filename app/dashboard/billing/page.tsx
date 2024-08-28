"use client"
import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@headlessui/react'

const plans = {
  free:{
    heading:"For individuals and organizations who want to try our system",
    words : "10,000 Words/Month",
    downloads : "Unlimited Download & Copy",
    history : "1 Month of History",
    price: 0
  },
  team:{
    heading:"Avanced feaures for Individuals and organizations",
    words : "50,000 Words/Month",
    downloads : "Unlimited Download & Copy",
    history : "6 Month of History",
    price: 1000
  },
  enterprise:{
    heading:"Maximum performace for organisations",
    words : "2,00,000 Words/Month",
    downloads : "Unlimited Download & Copy",
    history : "1 Year of History",
    price : 4000
  }
}
function page() {
  const [currentPlan,setCurrentPlan] = useState(plans.free)
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Our plans for you</h2>

    <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
      {/* plan - start */}
      <div className="flex flex-col rounded-lg border p-4 pt-6">
        <div className="mb-12">
          <div className="mb-2 text-center text-2xl font-bold text-gray-800">Free</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">{plans.free.heading}</p>

          <div className="space-y-2">
            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.free.words}</span>
            </div>
            {/* check - end */}

            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.free.downloads}</span>
            </div>
            {/* check - end */}

            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.free.history}</span>
            </div>
            {/* check - end */}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600">$</span>
            <span className="text-4xl font-bold text-gray-800">{plans.free.price}</span>
            <span className="text-gray-500">per user/month</span>
          </div>

          <Button onClick={() => setCurrentPlan(plans.free)} className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Join for free</Button>
        </div>
      </div>
      {/* plan - end */}

      {/* plan - start */}
      <div className="relative flex flex-col rounded-lg border-2 border-indigo-500 p-4 pt-6">
        <div className="mb-12">
          <div className="absolute inset-x-0 -top-3 flex justify-center">
            <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
          </div>

          <div className="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">{plans.team.heading}</p>

          <div className="space-y-2">
            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.team.words}</span>
            </div>
            {/* check - end */}

            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.team.downloads}</span>
            </div>
            {/* check - end */}

            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.team.history}</span>
            </div>
            {/* check - end */}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600"><FontAwesomeIcon icon={faIndianRupeeSign}/></span>
            <span className="text-4xl font-bold text-gray-800">{plans.team.price}</span>
            <span className="text-gray-500">per user/month</span>
          </div>

          <Button onClick={() => setCurrentPlan(plans.team)} className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Continue with Team</Button>
        </div>
      </div>
      {/* plan - end */}

      {/* plan - start */}
      <div className="flex flex-col rounded-lg border p-4 pt-6">
        <div className="mb-12">
          <div className="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">{plans.enterprise.heading}</p>

          <div className="space-y-2">
            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.enterprise.words}</span>
            </div>
            {/* check - end */}

            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.enterprise.downloads}</span>
            </div>
            {/* check - end */}

            {/* check - start */}
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">{plans.enterprise.history}</span>
            </div>
            {/* check - end */}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600"><FontAwesomeIcon icon={faIndianRupeeSign}/></span>
            <span className="text-4xl font-bold text-gray-800">{plans.enterprise.price}</span>
            <span className="text-gray-500">per user/month</span>
          </div>

          <Button onClick={() => setCurrentPlan(plans.enterprise)} className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Contact Sales</Button>
        </div>
      </div>
      {/* plan - end */}
    </div>

    <div className="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="#" className="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Get in touch</a>.</div>
  </div>
</div>
  )
}

export default page
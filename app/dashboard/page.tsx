"use client"
import React, { useState } from 'react'
import SeachSection from './_components/SeachSection';
import TemplateListSextion from './_components/TemplateListSextion';

const Dashboard = () => {
  const[userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
      {/*Search Section*/}
      <SeachSection onSearchInput={(value:string) => setUserSearchInput(value)}/>

      {/*Template List Section*/}
      <TemplateListSextion userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard;
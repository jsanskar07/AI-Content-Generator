"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSextion'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { getUserById, getUserData } from '../../databaseOperation'
import { totalCreditsOfUser } from '../../_components/UsageTrack'

interface PROPS{
  params:{
    'template-slug' : string
  }
}
function CreateNewContent(props:PROPS) {
  //console.log(props.params)
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=> item.slug==props.params['template-slug'])
  const [loading,setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('')
  const {user} = useUser()
  const router =useRouter()
  const {totalUsage, totalCredits} = useContext(TotalUsageContext)
  const GenerateAIContent=async(FormData:any)=>{
    if(totalUsage >=totalCredits){
      router.push('/dashboard/billing')
      console.log("Please Upgrade")
      return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalApiPrompt = JSON.stringify(FormData)+" , "+ selectedPrompt;
    //console.log(finalApiPrompt)
    const result = await chatSession.sendMessage(finalApiPrompt);
    //console.log(result.response.text());
    const email = user?.primaryEmailAddress?.emailAddress
    const tempData = await getUserData(email ?? "")
    const plan = tempData === null || tempData[0] === undefined? "free" : tempData[0].userPlan
    setAiOutput(result?.response.text());
    await saveInDb(FormData, selectedTemplate?.slug, result?.response.text(),email,plan)
    
    setLoading(false);
  }

  const saveInDb = async(formData:any,slug:any,aiRes:string, email:any,plan:any) => {
    const result = await db.insert(AiOutput).values({
      formData : formData,
      templateSlug:slug,
      aiResponse : aiRes,
      createdBy : email,
      createdAt : moment().format('DD/MM/YYYY'),
      userPlan : plan

    })
    //console.log(result)
  }
  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft/> Back</Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5'>
      {/* Form Section */}
      <FormSection selectedTemplate={selectedTemplate}
      userFormInput={(v:any)=> GenerateAIContent(v)}
      loading={loading}/>
      {/* OutputSection */}
      <OutputSection aiOutput={aiOutput}/>
    </div>
    </div>
  )
}

export default CreateNewContent;
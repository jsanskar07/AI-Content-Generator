import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PROPS{
  aiOutput:string
}

const OutputSection = ({aiOutput}:PROPS) => {

  const editorRef: any = useRef();
  const [stringData, setStringData] = useState("")
  const {toast} = useToast()
  const handleClick=()=>{
    navigator.clipboard.writeText(stringData)
    toast({
      description: "Response is copied.",
    })
  }
  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput)
    setStringData(aiOutput)
  },[aiOutput])
  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg '>Your Result</h2>
        <Button onClick={()=> handleClick()} className='flex gap-2'><Copy className='w-4 h-4' />Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => editorRef.current.getInstance().getMarkdown()}
      />
    </div>
  )
}

export default OutputSection
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Copy } from 'lucide-react';

export function DialogDemo({aiResponse} : any) {
  const [stringData, setStringData] = useState(aiResponse)
  const {toast} = useToast()
  const handleClick=()=>{
    navigator.clipboard.writeText(stringData)
    toast({
      description: "Response is copied.",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">...</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>AI Response</DialogTitle>
          <DialogDescription>
            Check the Ai response from here
          </DialogDescription>
        </DialogHeader>
        <Textarea placeholder="Type your message here." rows={20} defaultValue={stringData} onChange={e=>setStringData(e.target.value)}/>
        <DialogFooter>
          <Button onClick={() => handleClick()} className='flex gap-2'><Copy className='w-4 h-4' />Copy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

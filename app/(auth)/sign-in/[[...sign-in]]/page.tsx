import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
export default function Page() {
  return (
    <div style={{
      backgroundImage: `url('./loginImage.jpg')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Button><ArrowLeft /> Back</Button>
          </Link>
        </div> */}
      <div className="flex items-center justify-center h-screen p-0" >
        
        <SignIn />

      </div>
    </div>
  )
}
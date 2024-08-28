import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
  <>
    <div className="flex items-center justify-center h-screen" style={{
    backgroundImage:`url('./loginImage.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>
      <SignUp />
    </div>
  </> 
  );
}
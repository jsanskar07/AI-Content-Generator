import { currentUser } from "@clerk/nextjs/server";
import { createContext } from "react";
import { getUserById } from "../dashboard/databaseOperation";

// export const TotalCreditsContext = createContext<any>(0)


// const fetchData=async()=>{
//     const fetchUser = await currentUser()
//     const email = fetchUser?.primaryEmailAddress?.emailAddress ?? ""
//     const data = await getUserById(email)
//     const plan = data[0].userPlan
//     return {fetchuser : fetchUser, plan:plan , data:data}
// }

// export const userLogin = createContext<any>(fetchData())
import { db } from "@/utils/db"
import { AiOutput } from "@/utils/schema";
import {SelectUser} from "../../utils/schema"
import {Payment} from "./history/components/columns"
import {eq} from "drizzle-orm"
import { currentUser } from "@clerk/nextjs/server";


export async function getUserById(email: SelectUser['createdBy']): Promise<Payment[]> {
    const data =  await db.select().from(AiOutput).where(eq(AiOutput.createdBy, email));
    return data;
}
export async function getUserData(email : string){
    // const user = await currentUser()
    // const email = user?.primaryEmailAddress?.emailAddress
    if(email === "") return null
    const data = await db.select().from(AiOutput).where(eq(AiOutput.createdBy,email))
    return data
}
// export function getData(){
//     return getUserEmailAddress()
// }
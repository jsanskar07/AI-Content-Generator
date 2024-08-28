import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import {  getUserById } from "../databaseOperation"
import { currentUser } from '@clerk/nextjs/server'


export default async function History() {  
    const user = await currentUser()
    const tempEmail = user?.primaryEmailAddress?.emailAddress
    //const tempEmail = user?.primaryEmailAddress?.emailAddress
    const email = tempEmail === undefined ? "":tempEmail
    const data = await getUserById(email)  
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

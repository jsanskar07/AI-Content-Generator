"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DialogDemo } from "./AiResponsePopUp"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  formData: string
  aiResponse: any
  templateSlug: any
  createdBy: any
  createdAt: any
  userPlan:any
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "formData",
    header: "Form Data",
  },
  {
    accessorKey: "templateSlug",
    header: "Category",
  },
  {
    accessorKey: "createdBy",
    header: "email",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "aiResponse",
    header: "Check Response",
    //enableHiding: false,
    cell: ({ row }) => {
      const response = row.original.aiResponse
      const res = response === undefined ? "" : response
      return (
        <DialogDemo aiResponse={res}/>
      )
    },
  },
]

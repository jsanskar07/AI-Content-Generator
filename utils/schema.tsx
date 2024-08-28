import { pgTable, serial,varchar, text } from "drizzle-orm/pg-core"
export const AiOutput = pgTable('AIOUTPUT',{
    id:serial('ID').primaryKey(),
    formData:varchar('FORMDATA').notNull(),
    aiResponse:text('AIRESPONSE'),
    templateSlug:varchar('TEMPLATESLUG').notNull(),
    createdBy:varchar('CREATEDBY').notNull(),
    createdAt:varchar('CREATEDAT'),
    userPlan:varchar('USERPLAN')
})

export type SelectUser = typeof AiOutput.$inferSelect;
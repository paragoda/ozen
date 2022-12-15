/*

Bad:
- as minimum tyscript should be build to run
- can't use links(url) to schema
- much more

*/


// import * from "@paragoda/ozen-schema"
const schema: any = () => { }
const auth: any = {}

const Role = ["USER", "ADMIN"] as const

const user = {
  id: [uuid, pk, autogen],
  name: varchar(255).nullable(),
  email: varchar(255).unique(),
  profileViews: int().default(0).check(pv => pv.more(-1)),
  role: enum(Role).default("USER"), // ??
  coinflips: boolean().array(1) // 1 = depth
}

export default schema({
  db: {
    provider: "postgresql",
    connectionStrEnv: "OZEN_DB_CONNECTION_STR",
    auth: true
  },
  tables: {
    user
  },
  access: {
    user: {
      select: auth.uid.eq(user.id),
      insert: auth.uid.notNull(),
      update: auth.uid.eq(user.id),
      delete: auth.uid.eq(user.id)
    },

  }
})